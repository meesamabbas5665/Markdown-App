const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 1. Export Register
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: "User created", user: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. Export Login (Crucial: Even if it's empty, it must be a function)
exports.login = async (req, res) => {
    try {
        res.status(200).json({ message: "Login endpoint working" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};