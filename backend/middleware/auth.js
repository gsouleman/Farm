const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: { message: 'No token provided' } });
        }

        const token = authHeader.substring(7); // Remove 'Bearer ' prefix

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add user info to request
        req.user = {
            id: parseInt(decoded.userId),
            email: decoded.email,
            role: decoded.role
        };
        req.userId = parseInt(decoded.userId); // Keep for backward compatibility if needed
        console.log(`Debug: AuthMiddleware - Token verified for user: ${req.userId}`);

        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: { message: 'Invalid token' } });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: { message: 'Token expired' } });
        }
        return res.status(500).json({ error: { message: 'Authentication error' } });
    }
};

module.exports = authMiddleware;
