const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

// Get all transactions for a farm
router.get('/farm/:farmId', async (req, res) => {
    try {
        // Verify farm ownership
        const farmCheck = await db.query(
            'SELECT id FROM farms WHERE id = $1 AND user_id = $2',
            [req.params.farmId, req.userId]
        );

        if (farmCheck.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Farm not found' } });
        }

        const result = await db.query(
            'SELECT * FROM transactions WHERE farm_id = $1 ORDER BY date DESC, created_at DESC',
            [req.params.farmId]
        );

        res.json(result.rows);
    } catch (error) {
        console.error('Get transactions error:', error);
        res.status(500).json({ error: { message: 'Failed to fetch transactions' } });
    }
});

// Create transaction
router.post('/farm/:farmId', [
    body('date').isISO8601().toDate(),
    body('type').isIn(['income', 'expense']),
    body('category').notEmpty().trim(),
    body('description').optional().trim(),
    body('amount').isFloat({ min: 0 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        // Verify farm ownership
        const farmCheck = await db.query(
            'SELECT id FROM farms WHERE id = $1 AND user_id = $2',
            [req.params.farmId, req.userId]
        );

        if (farmCheck.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Farm not found' } });
        }

        const { date, type, category, description, amount, sectionId } = req.body;

        const result = await db.query(
            `INSERT INTO transactions (farm_id, date, type, category, description, amount, section_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
            [req.params.farmId, date, type, category, description || null, amount, sectionId || null]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create transaction error:', error);
        res.status(500).json({ error: { message: 'Failed to create transaction' } });
    }
});

// Update transaction
router.put('/:id', [
    body('date').optional().isISO8601().toDate(),
    body('type').optional().isIn(['income', 'expense']),
    body('category').optional().notEmpty().trim(),
    body('description').optional().trim(),
    body('amount').optional().isFloat({ min: 0 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        // Validate ID
        if (isNaN(parseInt(req.params.id)) || req.params.id === 'undefined') {
            return res.status(400).json({ error: { message: 'Invalid or missing ID' } });
        }

        // Verify ownership through farm
        const ownershipCheck = await db.query(
            `SELECT t.id FROM transactions t
       JOIN farms f ON t.farm_id = f.id
       WHERE t.id = $1 AND f.user_id = $2`,
            [req.params.id, req.userId]
        );

        if (ownershipCheck.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Transaction not found' } });
        }

        const { date = null, type = null, category = null, description = null, amount = null, sectionId = null } = req.body;

        const result = await db.query(
            `UPDATE transactions
       SET date = COALESCE($1, date),
           type = COALESCE($2, type),
           category = COALESCE($3, category),
           description = COALESCE($4, description),
           amount = COALESCE($5, amount),
           section_id = COALESCE($6, section_id)
       WHERE id = $7
       RETURNING *`,
            [date, type, category, description, amount, sectionId, req.params.id]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update transaction error:', error);
        res.status(500).json({ error: { message: 'Failed to update transaction' } });
    }
});

// Delete transaction
router.delete('/:id', async (req, res) => {
    try {
        const result = await db.query(
            `DELETE FROM transactions t
       USING farms f
       WHERE t.farm_id = f.id AND t.id = $1 AND f.user_id = $2
       RETURNING t.id`,
            [req.params.id, req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Transaction not found' } });
        }

        res.json({ message: 'Transaction deleted successfully', id: result.rows[0].id });
    } catch (error) {
        console.error('Delete transaction error:', error);
        res.status(500).json({ error: { message: 'Failed to delete transaction' } });
    }
});

module.exports = router;
