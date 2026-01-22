const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

// Get all crops for a farm
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
            'SELECT * FROM crops WHERE farm_id = $1 ORDER BY planted_date DESC',
            [req.params.farmId]
        );

        res.json(result.rows);
    } catch (error) {
        console.error('Get crops error:', error);
        res.status(500).json({ error: { message: 'Failed to fetch crops' } });
    }
});

// Create crop
router.post('/farm/:farmId', [
    body('category').isIn(['fruit', 'cash']),
    body('type').notEmpty().trim(),
    body('count').optional().isInt({ min: 0 }),
    body('area').optional().isFloat({ min: 0 }),
    body('plantedDate').isISO8601().toDate(),
    body('status').notEmpty().trim(),
    body('harvestDate').optional().isISO8601().toDate(),
    body('yield').optional().isFloat({ min: 0 })
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

        const { category, type, count, area, plantedDate, status, harvestDate, yield: yieldValue } = req.body;

        const result = await db.query(
            `INSERT INTO crops (farm_id, category, type, count, area, planted_date, status, harvest_date, yield)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
            [req.params.farmId, category, type, count || null, area || null, plantedDate, status, harvestDate || null, yieldValue || null]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create crop error:', error);
        res.status(500).json({ error: { message: 'Failed to create crop' } });
    }
});

// Update crop
router.put('/:id', [
    body('category').optional().isIn(['fruit', 'cash']),
    body('type').optional().notEmpty().trim(),
    body('count').optional().isInt({ min: 0 }),
    body('area').optional().isFloat({ min: 0 }),
    body('plantedDate').optional().isISO8601().toDate(),
    body('status').optional().notEmpty().trim(),
    body('harvestDate').optional().isISO8601().toDate(),
    body('yield').optional().isFloat({ min: 0 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        const ownershipCheck = await db.query(
            `SELECT c.id FROM crops c
       JOIN farms f ON c.farm_id = f.id
       WHERE c.id = $1 AND f.user_id = $2`,
            [req.params.id, req.userId]
        );

        if (ownershipCheck.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Crop not found' } });
        }

        const { category, type, count, area, plantedDate, status, harvestDate, yield: yieldValue } = req.body;

        const result = await db.query(
            `UPDATE crops
       SET category = COALESCE($1, category),
           type = COALESCE($2, type),
           count = COALESCE($3, count),
           area = COALESCE($4, area),
           planted_date = COALESCE($5, planted_date),
           status = COALESCE($6, status),
           harvest_date = COALESCE($7, harvest_date),
           yield = COALESCE($8, yield),
           updated_at = NOW()
       WHERE id = $9
       RETURNING *`,
            [category, type, count, area, plantedDate, status, harvestDate, yieldValue, req.params.id]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update crop error:', error);
        res.status(500).json({ error: { message: 'Failed to update crop' } });
    }
});

// Delete crop
router.delete('/:id', async (req, res) => {
    try {
        const result = await db.query(
            `DELETE FROM crops c
       USING farms f
       WHERE c.farm_id = f.id AND c.id = $1 AND f.user_id = $2
       RETURNING c.id`,
            [req.params.id, req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Crop not found' } });
        }

        res.json({ message: 'Crop deleted successfully', id: result.rows[0].id });
    } catch (error) {
        console.error('Delete crop error:', error);
        res.status(500).json({ error: { message: 'Failed to delete crop' } });
    }
});

module.exports = router;
