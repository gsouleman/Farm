const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const requireRole = require('../middleware/rbac');

// Register (Admin only)
router.post('/register', [
    authMiddleware,
    requireRole(['admin']),
    body('email').isEmail().normalizeEmail(),
    // body('password').isLength({ min: 6 }), // Password optional if generating? But user schema requires it.
    body('password').notEmpty().withMessage('Password is required'),
    body('fullName').optional().trim(),
    body('role').optional().isIn(['admin', 'user', 'guest']),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        const { email, password, fullName, role } = req.body;

        // Check if user exists
        const existingUser = await db.query('SELECT id FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(409).json({ error: { message: 'Email already registered' } });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Create user
        const result = await db.query(
            `INSERT INTO users (email, password_hash, full_name, role, must_change_password) 
             VALUES ($1, $2, $3, $4, $5) 
             RETURNING id, email, full_name, role, created_at`,
            [email, passwordHash, fullName || null, role || 'user', true] // Always require password change for new users created by admin
        );

        const user = result.rows[0];

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user.id,
                email: user.email,
                fullName: user.full_name,
                role: user.role,
                createdAt: user.created_at
            }
        });
    } catch (error) {
        console.error('Register error FULL:', error);
        res.status(500).json({ error: { message: 'Registration failed: ' + error.message, stack: error.stack } });
    }
});

// Login
router.post('/login', [
    body('email').notEmpty(), // Allow username/email
    body('password').notEmpty()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        const { email, password } = req.body;
        console.log('Login Attempt Body:', JSON.stringify(req.body)); // Debug log

        // Find user
        const result = await db.query(
            'SELECT id, email, password_hash, full_name, role, must_change_password FROM users WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            console.log('Login failed: User not found for email:', email);
            return res.status(401).json({ error: { message: 'Invalid credentials' } });
        }

        const user = result.rows[0];

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password_hash);
        if (!isValidPassword) {
            console.log('Login failed: Invalid password for user:', email);
            return res.status(401).json({ error: { message: 'Invalid credentials' } });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
        );

        res.json({
            user: {
                id: user.id,
                email: user.email,
                fullName: user.full_name,
                role: user.role,
                mustChangePassword: user.must_change_password
            },
            token
        });
    } catch (error) {
        console.error('Login error FULL:', error);
        res.status(500).json({ error: { message: 'Login failed: ' + error.message } });
    }
});

// Get current user
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const result = await db.query(
            'SELECT id, email, full_name, role, must_change_password, created_at FROM users WHERE id = $1',
            [req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'User not found' } });
        }

        const user = result.rows[0];
        res.json({
            id: user.id,
            email: user.email,
            fullName: user.full_name,
            role: user.role,
            mustChangePassword: user.must_change_password,
            createdAt: user.created_at
        });
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({ error: { message: 'Failed to get user info' } });
    }
});

// Change Password
router.post('/change-password', [
    authMiddleware,
    body('currentPassword').notEmpty(),
    body('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        const { currentPassword, newPassword } = req.body;

        // Get user
        const result = await db.query(
            'SELECT password_hash FROM users WHERE id = $1',
            [req.userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'User not found' } });
        }

        const user = result.rows[0];

        // Verify current password
        const isValid = await bcrypt.compare(currentPassword, user.password_hash);
        if (!isValid) {
            return res.status(401).json({ error: { message: 'Incorrect current password' } });
        }

        // Hash new password
        const newHash = await bcrypt.hash(newPassword, 10);

        // Update password and clear flag
        await db.query(
            'UPDATE users SET password_hash = $1, must_change_password = false WHERE id = $2',
            [newHash, req.userId]
        );

        res.json({ message: 'Password updated successfully' });

    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({ error: { message: 'Failed to update password' } });
    }
});

// === Administrative User Management ===

// Get all users (Admin only)
router.get('/users', [
    authMiddleware,
    requireRole(['admin'])
], async (req, res) => {
    try {
        const result = await db.query(
            'SELECT id, email, full_name, role, created_at, must_change_password FROM users ORDER BY created_at DESC'
        );

        const users = result.rows.map(row => ({
            id: row.id,
            email: row.email,
            fullName: row.full_name,
            role: row.role,
            createdAt: row.created_at,
            mustChangePassword: row.must_change_password
        }));

        res.json(users);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ error: { message: 'Failed to fetch users' } });
    }
});

// Update user (Admin only)
router.put('/users/:id', [
    authMiddleware,
    requireRole(['admin']),
    body('email').optional().isEmail().normalizeEmail(),
    body('fullName').optional().trim(),
    body('role').optional().isIn(['admin', 'user', 'guest']),
    body('password').optional().isLength({ min: 6 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: { message: 'Validation failed', details: errors.array() } });
        }

        const { id } = req.params;
        const { email, fullName, role, password } = req.body;

        // Check if user exists
        const userResult = await db.query('SELECT id FROM users WHERE id = $1', [id]);
        if (userResult.rows.length === 0) {
            return res.status(404).json({ error: { message: 'User not found' } });
        }

        let updateQuery = 'UPDATE users SET ';
        const updateValues = [];
        let paramCount = 1;

        if (email) {
            updateQuery += `email = $${paramCount++}, `;
            updateValues.push(email);
        }
        if (fullName !== undefined) {
            updateQuery += `full_name = $${paramCount++}, `;
            updateValues.push(fullName);
        }
        if (role) {
            updateQuery += `role = $${paramCount++}, `;
            updateValues.push(role);
        }
        if (password) {
            const passwordHash = await bcrypt.hash(password, 10);
            updateQuery += `password_hash = $${paramCount++}, `;
            updateValues.push(passwordHash);
        }

        // Remove trailing comma and space
        updateQuery = updateQuery.slice(0, -2);
        updateQuery += ` WHERE id = $${paramCount} RETURNING id, email, full_name, role`;
        updateValues.push(id);

        const result = await db.query(updateQuery, updateValues);
        const user = result.rows[0];

        res.json({
            message: 'User updated successfully',
            user: {
                id: user.id,
                email: user.email,
                fullName: user.full_name,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({ error: { message: 'Failed to update user' } });
    }
});

// Delete user (Admin only)
router.delete('/users/:id', [
    authMiddleware,
    requireRole(['admin'])
], async (req, res) => {
    try {
        const { id } = req.params;

        // Prevent admin from deleting themselves
        if (id === req.userId.toString()) {
            return res.status(400).json({ error: { message: 'You cannot delete your own account' } });
        }

        const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: { message: 'User not found' } });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ error: { message: 'Failed to delete user' } });
    }
});

module.exports = router;
