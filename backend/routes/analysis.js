const express = require('express');
const router = express.Router();
const db = require('../config/database');
const authenticateToken = require('../middleware/auth');

// GET Analysis by Farm ID
router.get('/:farmId', authenticateToken, async (req, res) => {
    try {
        const { farmId } = req.params;
        const result = await db.query(
            'SELECT * FROM farm_analysis WHERE farm_id = $1',
            [farmId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No analysis found for this farm' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error fetching analysis' });
    }
});

// POST (Save/Update) Analysis
router.post('/', authenticateToken, async (req, res) => {
    try {
        const { farm_id, data } = req.body;

        if (!farm_id || !data) {
            return res.status(400).json({ error: 'farm_id and data are required' });
        }

        // Upsert (Insert or Update on Conflict)
        const result = await db.query(
            `INSERT INTO farm_analysis (farm_id, data, updated_at) 
             VALUES ($1, $2, NOW()) 
             ON CONFLICT (farm_id) 
             DO UPDATE SET data = $2, updated_at = NOW() 
             RETURNING *`,
            [farm_id, data]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error saving analysis' });
    }
});

// DELETE Analysis
router.delete('/:farmId', authenticateToken, async (req, res) => {
    try {
        const { farmId } = req.params;
        await db.query('DELETE FROM farm_analysis WHERE farm_id = $1', [farmId]);
        res.json({ message: 'Analysis deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error deleting analysis' });
    }
});

module.exports = router;
