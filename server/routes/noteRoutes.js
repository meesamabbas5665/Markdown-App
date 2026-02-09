const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, noteController.createNote);       // Create
router.get('/', auth, noteController.getNotes);          // Read (History)
router.put('/:id', auth, noteController.updateNote);     // Update
router.delete('/:id', auth, noteController.deleteNote);  // Delete

module.exports = router;    