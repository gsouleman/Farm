const express = require('express');
const router = express.Router();
const db = require('../config/database');
const authenticateToken = require('../middleware/auth');

// Get all claims for a farm
router.get('/farm/:farmId', authenticateToken, async (req, res) => {
    try {
        const { farmId } = req.params;
        const result = await db.query(
            `SELECT ic.*, i.category as incident_category, i.date_detected as incident_date, i.subcategory as incident_subcategory
             FROM insurance_claims ic 
             LEFT JOIN incidents i ON ic.incident_id = i.id 
             WHERE ic.farm_id = $1 
             ORDER BY ic.filing_date DESC`,
            [farmId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error fetching insurance claims' });
    }
});

// Create a claim
router.post('/', authenticateToken, async (req, res) => {
    try {
        const { farm_id, incident_id, claim_number, provider, amount_claimed, filing_date, notes } = req.body;
        const result = await db.query(
            `INSERT INTO insurance_claims (farm_id, incident_id, claim_number, provider, amount_claimed, filing_date, notes)
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [farm_id, incident_id, claim_number, provider, amount_claimed, filing_date, notes]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error creating insurance claim' });
    }
});

// Update a claim status/amount
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { status, amount_approved, notes } = req.body;
        const result = await db.query(
            `UPDATE insurance_claims SET 
             status = COALESCE($1, status),
             amount_approved = COALESCE($2, amount_approved),
             notes = COALESCE($3, notes),
             updated_at = NOW()
             WHERE id = $4 RETURNING *`,
            [status, amount_approved, notes, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error updating insurance claim' });
    }
});

// Delete a claim
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        await db.query('DELETE FROM insurance_claims WHERE id = $1', [req.params.id]);
        res.json({ message: 'Claim deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error deleting claim' });
    }
});

module.exports = router;
