const express = require('express');
const router = express.Router();
const db = require('../config/database');
const authenticateToken = require('../middleware/auth');

// Get all thresholds for a farm
router.get('/thresholds/farm/:farmId', authenticateToken, async (req, res) => {
    try {
        const { farmId } = req.params;
        const result = await db.query(
            'SELECT * FROM incident_thresholds WHERE farm_id = $1 ORDER BY incident_category',
            [farmId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error fetching thresholds' });
    }
});

// Create or Update a threshold
router.post('/thresholds', authenticateToken, async (req, res) => {
    try {
        const { farm_id, incident_category, count_threshold, time_period_days } = req.body;

        if (!farm_id || !incident_category) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Check if exists
        const check = await db.query(
            'SELECT id FROM incident_thresholds WHERE farm_id = $1 AND incident_category = $2',
            [farm_id, incident_category]
        );

        if (check.rows.length > 0) {
            // Update
            const update = await db.query(
                `UPDATE incident_thresholds 
                 SET count_threshold = $1, time_period_days = $2, updated_at = NOW() 
                 WHERE id = $3 RETURNING *`,
                [count_threshold, time_period_days, check.rows[0].id]
            );
            res.json(update.rows[0]);
        } else {
            // Create
            const insert = await db.query(
                `INSERT INTO incident_thresholds (farm_id, incident_category, count_threshold, time_period_days)
                 VALUES ($1, $2, $3, $4) RETURNING *`,
                [farm_id, incident_category, count_threshold || 3, time_period_days || 30]
            );
            res.json(insert.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error saving threshold' });
    }
});

// Delete a threshold
router.delete('/thresholds/:id', authenticateToken, async (req, res) => {
    try {
        await db.query('DELETE FROM incident_thresholds WHERE id = $1', [req.params.id]);
        res.json({ message: 'Threshold deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error deleting threshold' });
    }
});

module.exports = router;
