const express = require('express');
const router = express.Router();
const db = require('../config/database');
const authenticateToken = require('../middleware/auth');

// Get all tasks for a farm
router.get('/farm/:farmId', authenticateToken, async (req, res) => {
    try {
        const { farmId } = req.params;
        const result = await db.query(
            'SELECT * FROM tasks WHERE farm_id = $1 ORDER BY due_date ASC',
            [farmId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error fetching tasks' });
    }
});

// Create a task
router.post('/', authenticateToken, async (req, res) => {
    try {
        const { farm_id, title, description, due_date, priority, created_from_incident_id } = req.body;

        const result = await db.query(
            `INSERT INTO tasks (farm_id, title, description, due_date, priority, created_from_incident_id)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [farm_id, title, description, due_date, priority || 'Medium', created_from_incident_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error creating task' });
    }
});

// Update a task (status, etc.)
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, due_date, status, priority } = req.body;

        const result = await db.query(
            `UPDATE tasks SET 
             title = COALESCE($1, title),
             description = COALESCE($2, description),
             due_date = COALESCE($3, due_date),
             status = COALESCE($4, status),
             priority = COALESCE($5, priority),
             updated_at = NOW()
             WHERE id = $6 RETURNING *`,
            [title, description, due_date, status, priority, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error updating task' });
    }
});

// Delete a task
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        await db.query('DELETE FROM tasks WHERE id = $1', [req.params.id]);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error deleting task' });
    }
});

module.exports = router;
