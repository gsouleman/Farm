const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

// Get all sections for a farm
router.get('/farm/:farmId', async (req, res) => {
    try {
        const farmCheck = await db.query(
            'SELECT id FROM farms WHERE id = $1 AND user_id = $2',
            [req.params.farmId, req.userId]
        );

        if (farmCheck.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Farm not found' } });
        }

        const result = await db.query(
            'SELECT * FROM sections WHERE farm_id = $1 ORDER BY created_at DESC',
            [req.params.farmId]
        );

        res.json(result.rows);
    } catch (error) {
        console.error('Get sections error:', error);
        res.status(500).json({ error: { message: 'Failed to fetch sections' } });
    }
});

// Create section
router.post('/farm/:farmId', [
    body('name').notEmpty().trim(),
    body('type').notEmpty().trim(),
    body('cropType').optional().trim(),
    body('area').isFloat({ min: 0 }),
    body('percentage').optional().isFloat({ min: 0, max: 100 }),
    body('color').matches(/^#[0-9A-F]{6}$/i),
    body('boundaries').optional().isArray(),
    body('notes').optional().trim()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        const farmCheck = await db.query(
            'SELECT id FROM farms WHERE id = $1 AND user_id = $2',
            [req.params.farmId, req.userId]
        );

        if (farmCheck.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Farm not found' } });
        }

        const { name, type, cropType, area, percentage, color, boundaries, notes } = req.body;

        const result = await db.query(
            `INSERT INTO sections (farm_id, name, type, crop_type, area, percentage, color, boundaries, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
            [
                req.params.farmId,
                name,
                type,
                cropType || null,
                area,
                percentage || null,
                color,
                boundaries ? JSON.stringify(boundaries) : null,
                notes || null
            ]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create section error:', error);
        res.status(500).json({ error: { message: 'Failed to create section' } });
    }
});

// Update section
router.put('/:id', [
    body('name').optional().notEmpty().trim(),
    body('type').optional().notEmpty().trim(),
    body('cropType').optional().trim(),
    body('area').optional().isFloat({ min: 0 }),
    body('percentage').optional().isFloat({ min: 0, max: 100 }),
    body('color').optional().matches(/^#[0-9A-F]{6}$/i),
    body('boundaries').optional().isArray(),
    body('notes').optional().trim()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        const ownershipCheck = await db.query(
            `SELECT s.id FROM sections s
       JOIN farms f ON s.farm_id = f.id
       WHERE s.id = $1 AND f.user_id = $2`,
            [req.params.id, req.userId]
        );

        if (ownershipCheck.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Section not found' } });
        }

        const { name, type, cropType, area, percentage, color, boundaries, notes } = req.body;

        const result = await db.query(
            `UPDATE sections
       SET name = COALESCE($1, name),
           type = COALESCE($2, type),
           crop_type = COALESCE($3, crop_type),
           area = COALESCE($4, area),
           percentage = COALESCE($5, percentage),
           color = COALESCE($6, color),
           boundaries = COALESCE($7, boundaries),
           notes = COALESCE($8, notes)
       WHERE id = $9
       RETURNING *`,
            [name, type, cropType, area, percentage, color, boundaries ? JSON.stringify(boundaries) : null, notes, req.params.id]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update section error:', error);
        res.status(500).json({ error: { message: 'Failed to update section' } });
    }
});

// Delete section
router.delete('/:id', async (req, res) => {
    try {
        const result = await db.query(
            `DELETE FROM sections s
       USING farms f
       WHERE s.farm_id = f.id AND s.id = $1 AND f.user_id = $2
       RETURNING s.id`,
            [req.params.id, req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Section not found' } });
        }

        res.json({ message: 'Section deleted successfully', id: result.rows[0].id });
    } catch (error) {
        console.error('Delete section error:', error);
        res.status(500).json({ error: { message: 'Failed to delete section' } });
    }
});

module.exports = router;
