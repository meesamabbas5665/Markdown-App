const express = require('express');
const router = express.Router();

// 1. Use curly braces to pull the functions out of the controller
const { register, login } = require('../controllers/authController');

// 2. Ensure both 'register' and 'login' exist. 
// If either is undefined, the server will crash on these lines.
router.post('/register', register); 
router.post('/login', login); 

module.exports = router;