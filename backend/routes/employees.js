const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

// Get all employees for a farm
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
            'SELECT * FROM employees WHERE farm_id = $1 ORDER BY name ASC',
            [req.params.farmId]
        );

        res.json(result.rows);
    } catch (error) {
        console.error('Get employees error:', error);
        res.status(500).json({ error: { message: 'Failed to fetch employees' } });
    }
});

// Create employee
router.post('/farm/:farmId', [
    body('name').notEmpty().trim(),
    body('role').notEmpty().trim(),
    body('type').notEmpty().trim(),
    body('status').optional().trim(),
    body('phone').optional().trim(),
    body('pay_frequency').optional().trim(),
    body('pay_rate').optional().isFloat({ min: 0 })
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

        const { name, role, type, status, phone, pay_frequency, pay_rate } = req.body;

        const result = await db.query(
            `INSERT INTO employees (farm_id, name, role, type, status, phone, pay_frequency, pay_rate)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
            [
                req.params.farmId,
                name,
                role,
                type,
                status || 'Active',
                phone || null,
                pay_frequency || null,
                pay_rate || null
            ]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create employee error:', error);
        res.status(500).json({ error: { message: 'Failed to create employee' } });
    }
});

// Update employee
router.put('/:id', [
    body('name').optional().notEmpty().trim(),
    body('role').optional().trim(),
    body('type').optional().trim(),
    body('status').optional().trim(),
    body('phone').optional().trim(),
    body('pay_frequency').optional().trim(),
    body('pay_rate').optional().isFloat({ min: 0 })
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
            `SELECT e.id FROM employees e
       JOIN farms f ON e.farm_id = f.id
       WHERE e.id = $1 AND f.user_id = $2`,
            [req.params.id, req.userId]
        );

        if (ownershipCheck.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Employee not found' } });
        }

        const { name = null, role = null, type = null, status = null, phone = null, pay_frequency = null, pay_rate = null } = req.body;

        const result = await db.query(
            `UPDATE employees
       SET name = COALESCE($1, name),
           role = COALESCE($2, role),
           type = COALESCE($3, type),
           status = COALESCE($4, status),
           phone = COALESCE($5, phone),
           pay_frequency = COALESCE($6, pay_frequency),
           pay_rate = COALESCE($7, pay_rate),
           updated_at = NOW()
       WHERE id = $8
       RETURNING *`,
            [name, role, type, status, phone, pay_frequency, pay_rate, req.params.id]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update employee error:', error);
        res.status(500).json({ error: { message: 'Failed to update employee' } });
    }
});

// Delete employee
router.delete('/:id', async (req, res) => {
    try {
        const result = await db.query(
            `DELETE FROM employees e
       USING farms f
       WHERE e.farm_id = f.id AND e.id = $1 AND f.user_id = $2
       RETURNING e.id`,
            [req.params.id, req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Employee not found' } });
        }

        res.json({ message: 'Employee deleted successfully', id: result.rows[0].id });
    } catch (error) {
        console.error('Delete employee error:', error);
        res.status(500).json({ error: { message: 'Failed to delete employee' } });
    }
});

module.exports = router;
