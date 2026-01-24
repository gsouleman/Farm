const requireRole = (roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: { message: 'Authentication required' } });
        }

        // Assuming req.user is populated by authMiddleware and now includes role
        // We need to ensure authMiddleware adds role to req.user

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: { message: 'Access denied: Insufficient permissions' } });
        }

        next();
    };
};

module.exports = requireRole;
