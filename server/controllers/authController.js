const User = require('../models/User');
const bcrypt = require('bcryptjs');

// USE 'exports.register'
exports.register = async (req, res) => {
    try {
        // Receiving the 4 fields from your frontend
        const { username, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Add a placeholder for login so the route doesn't crash
exports.login = async (req, res) => { res.send("Login logic here"); };