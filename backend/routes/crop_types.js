const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

// Get all crop types for user
router.get('/', async (req, res) => {
    try {
        const result = await db.query(
            'SELECT * FROM crop_types WHERE user_id = $1 ORDER BY name ASC',
            [req.userId]
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Get crop types error:', error);
        res.status(500).json({ error: { message: 'Failed to fetch crop types' } });
    }
});

// Create new crop type
router.post('/', [
    body('category').isIn(['fruit', 'cash']),
    body('name').notEmpty().trim()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        const { category, name } = req.body;

        // Check for duplicate
        const existing = await db.query(
            'SELECT id FROM crop_types WHERE user_id = $1 AND category = $2 AND name = $3',
            [req.userId, category, name]
        );

        if (existing.rows.length > 0) {
            // Already exists, just return it
            return res.json(existing.rows[0]);
        }

        const result = await db.query(
            `INSERT INTO crop_types (user_id, category, name)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [req.userId, category, name]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create crop type error:', error);
        res.status(500).json({ error: { message: 'Failed to create crop type' } });
    }
});

// Update crop type
router.put('/:id', [
    body('name').notEmpty().trim()
], async (req, res) => {
    try {
        const { name } = req.body;

        const result = await db.query(
            `UPDATE crop_types
             SET name = $1
             WHERE id = $2 AND user_id = $3
             RETURNING *`,
            [name, req.params.id, req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Type not found' } });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update crop type error:', error);
        res.status(500).json({ error: { message: 'Failed to update crop type' } });
    }
});

// Delete crop type
router.delete('/:id', async (req, res) => {
    try {
        const result = await db.query(
            'DELETE FROM crop_types WHERE id = $1 AND user_id = $2 RETURNING id',
            [req.params.id, req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Type not found' } });
        }

        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        console.error('Delete crop type error:', error);
        res.status(500).json({ error: { message: 'Failed to delete crop type' } });
    }
});

module.exports = router;
