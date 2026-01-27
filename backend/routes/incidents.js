const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET all incidents for a farm
router.get('/:farmId', async (req, res) => {
    try {
        const { farmId } = req.params;
        const result = await db.query(
            'SELECT * FROM incidents WHERE farm_id = $1 ORDER BY date_detected DESC',
            [farmId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching incidents:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST new incident
router.post('/', async (req, res) => {
    try {
        const {
            farm_id, category, subcategory, severity, date_detected,
            affected_assets, financial_impact, details, status, attachment_url
        } = req.body;

        const result = await db.query(
            `INSERT INTO incidents (
                farm_id, category, subcategory, severity, date_detected, 
                affected_assets, financial_impact, details, status, attachment_url
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [
                farm_id, category, subcategory, severity, date_detected,
                affected_assets, financial_impact || 0, details || {}, status || 'Open', attachment_url
            ]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error logging incident:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT update incident
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {
            category, subcategory, severity, date_detected, date_resolved,
            affected_assets, financial_impact, details, status, attachment_url
        } = req.body;

        const result = await db.query(
            `UPDATE incidents SET 
                category = $1, subcategory = $2, severity = $3, date_detected = $4, 
                date_resolved = $5, affected_assets = $6, financial_impact = $7, 
                details = $8, status = $9, attachment_url = $10, updated_at = CURRENT_TIMESTAMP
            WHERE id = $11 RETURNING *`,
            [
                category, subcategory, severity, date_detected, date_resolved,
                affected_assets, financial_impact, details, status, attachment_url, id
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Incident not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error updating incident:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE incident
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query('DELETE FROM incidents WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Incident not found' });
        }

        res.json({ message: 'Incident deleted successfully' });
    } catch (err) {
        console.error('Error deleting incident:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
