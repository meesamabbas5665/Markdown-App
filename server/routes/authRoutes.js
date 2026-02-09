const express = require('express');
const router = express.Router();
// Import the controller
const authController = require('../controllers/authController');

// Ensure 'register' exists in the controller
router.post('/register', authController.register); 
router.post('/login', authController.login);

module.exports = router;