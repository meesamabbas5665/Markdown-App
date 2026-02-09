const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: "Access Denied. Please Login." });

    try {
        // Bearer token.split(" ")[1]
        const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = verified; 
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};