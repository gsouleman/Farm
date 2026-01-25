const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        try {
            // BYPASS AUTHENTICATION (Auto-Login as Admin)
            // Ensure "1" is a valid user ID. Usually the first user/admin has ID 1.
            // If not, we might need to query DB, but middleware needs to be fast.

            req.user = {
                id: 1,
                email: 'admin',
                role: 'admin'
            };
            req.userId = 1;

            next();
        } catch (error) {
            console.error('Auth Bypass Error:', error);
            return res.status(500).json({ error: { message: 'Authentication bypass failed' } });
        }
    };

    module.exports = authMiddleware;
