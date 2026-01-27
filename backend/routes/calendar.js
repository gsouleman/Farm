const express = require('express');
const db = require('../config/database');
const authMiddleware = require('../middleware/auth');
const calendarService = require('../services/calendarService');

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

/**
 * @route GET /api/calendar/:farmId
 * @desc Get personalized planting calendar and risks for a farm
 */
router.get('/:farmId', async (req, res) => {
    try {
        const farmId = req.params.farmId;

        // Fetch farm to get altitude and name
        const farmResult = await db.query(
            'SELECT id, name, altitude FROM farms WHERE id = $1 AND user_id = $2',
            [farmId, req.userId]
        );

        if (farmResult.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Farm not found' } });
        }

        // Fetch incidents for historical risk analysis
        const incidentResult = await db.query(
            'SELECT category, date_detected FROM incidents WHERE farm_id = $1',
            [farmId]
        );

        const farm = farmResult.rows[0];
        const calendar = calendarService.getCalendar(farm, incidentResult.rows);

        res.json(calendar);
    } catch (error) {
        console.error('Calendar Fetch Error:', error);
        res.status(500).json({ error: { message: 'Failed to generate calendar' } });
    }
});

/**
 * @route GET /api/calendar/:farmId/alerts?crop=:cropName&date=:plantedDate
 * @desc Get specific alerts for a crop selection
 */
router.get('/:farmId/alerts', async (req, res) => {
    try {
        const { farmId } = req.params;
        const { crop, date, contingency } = req.query;
        const hasContingency = contingency === 'true';

        if (!crop) {
            return res.status(400).json({ error: { message: 'Crop name is required' } });
        }

        const farmResult = await db.query(
            'SELECT altitude FROM farms WHERE id = $1 AND user_id = $2',
            [farmId, req.userId]
        );

        if (farmResult.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Farm not found' } });
        }

        const altitude = farmResult.rows[0].altitude || 0;
        const alert = calendarService.getCropSelectionAlert(crop, altitude, date, hasContingency);

        res.json({ alert });
    } catch (error) {
        console.error('Calendar Alert Error:', error);
        res.status(500).json({ error: { message: 'Failed to check crop alerts' } });
    }
});

module.exports = router;
