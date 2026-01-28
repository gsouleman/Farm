const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

// Get all farms for current user
router.get('/', async (req, res) => {
    try {
        const result = await db.query(
            'SELECT * FROM farms WHERE user_id = $1 ORDER BY created_at DESC',
            [req.userId]
        );

        const farms = result.rows.map(f => {
            // Ensure boundaries is always a valid object/array, never a string
            let boundaries = f.boundaries;
            if (typeof boundaries === 'string') {
                try { boundaries = JSON.parse(boundaries); } catch (e) { boundaries = []; }
            }

            // Ensure zones is always a valid object
            let zones = f.zones;
            if (typeof zones === 'string') {
                try { zones = JSON.parse(zones); } catch (e) { zones = {}; }
            }

            return { ...f, boundaries, zones };
        });

        if (farms.length > 0) {
            farms.forEach(f => {
                const bCount = f.boundaries ? (Array.isArray(f.boundaries) ? f.boundaries.length : 'NOT_ARRAY') : 'NULL';
            });
        }
        res.json(farms);
    } catch (error) {
        console.error('Get farms error:', error);
        res.status(500).json({ error: { message: 'Failed to fetch farms' } });
    }
});

// Get single farm
router.get('/:id', async (req, res) => {
    try {
        const result = await db.query(
            'SELECT * FROM farms WHERE id = $1 AND user_id = $2',
            [req.params.id, req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Farm not found' } });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Get farm error:', error);
        res.status(500).json({ error: { message: 'Failed to fetch farm' } });
    }
});

// Create farm
router.post('/', [
    body('name').notEmpty().trim(),
    body('location').optional().trim(),
    body('area').optional().isFloat({ min: 0 }),
    body('perimeter').optional().isFloat({ min: 0 }),
    body('centerLat').optional().isFloat(),
    body('centerLng').optional().isFloat(),
    body('boundaries').optional().isArray(),
    body('zones').optional().isObject(),
    body('altitude').optional().isFloat()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        const { name, location, area, perimeter, centerLat, centerLng, boundaries, zones, altitude } = req.body;

        const result = await db.query(
            `INSERT INTO farms (user_id, name, location, area, perimeter, center_lat, center_lng, boundaries, zones, altitude)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
            [
                req.userId,
                name,
                location || null,
                area || null,
                perimeter || null,
                centerLat || null,
                centerLng || null,
                boundaries ? JSON.stringify(boundaries) : null,
                zones ? JSON.stringify(zones) : null,
                altitude || 0
            ]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create farm error:', error);
        res.status(500).json({ error: { message: 'Failed to create farm' } });
    }
});

// Update farm
router.put('/:id', [
    body('name').optional().notEmpty().trim(),
    body('location').optional().trim(),
    body('area').optional().isFloat({ min: 0 }),
    body('perimeter').optional().isFloat({ min: 0 }),
    body('centerLat').optional().isFloat(),
    body('centerLng').optional().isFloat(),
    body('boundaries').optional().isArray(),
    body('zones').optional().isObject(),
    body('altitude').optional().isFloat()
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

        // Check ownership
        const farmCheck = await db.query(
            'SELECT id FROM farms WHERE id = $1 AND user_id = $2',
            [req.params.id, req.userId]
        );

        if (farmCheck.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Farm not found' } });
        }

        const { name = null, location = null, area = null, perimeter = null, centerLat = null, centerLng = null, boundaries = null, zones = null, altitude = null } = req.body;


        const result = await db.query(
            `UPDATE farms 
       SET name = COALESCE($1, name),
           location = COALESCE($2, location),
           area = COALESCE($3, area),
           perimeter = COALESCE($4, perimeter),
           center_lat = COALESCE($5, center_lat),
           center_lng = COALESCE($6, center_lng),
           boundaries = COALESCE($7, boundaries),
           zones = COALESCE($8, zones),
           altitude = COALESCE($9, altitude),
           updated_at = NOW()
       WHERE id = $10 AND user_id = $11
       RETURNING *`,
            [
                name,
                location,
                area,
                perimeter,
                centerLat,
                centerLng,
                boundaries ? JSON.stringify(boundaries) : null,
                zones ? JSON.stringify(zones) : null,
                altitude,
                req.params.id,
                req.userId
            ]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update farm error:', error);
        res.status(500).json({ error: { message: 'Failed to update farm' } });
    }
});

// Delete farm
router.delete('/:id', async (req, res) => {
    try {
        const result = await db.query(
            'DELETE FROM farms WHERE id = $1 AND user_id = $2 RETURNING id',
            [req.params.id, req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'Farm not found' } });
        }

        res.json({ message: 'Farm deleted successfully', id: result.rows[0].id });
    } catch (error) {
        console.error('Delete farm error:', error);
        res.status(500).json({ error: { message: 'Failed to delete farm' } });
    }
});

module.exports = router;
