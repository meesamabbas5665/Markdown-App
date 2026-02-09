const Note = require('../models/Note');

// 1. CREATE a new note
exports.createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = await Note.create({
            title,
            content,
            userId: req.user.id // Taken from the Auth Middleware
        });
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ message: "Error creating note" });
    }
};

// 2. READ all notes for logged-in user (History)
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.findAll({ where: { userId: req.user.id } });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: "Error fetching notes" });
    }
};

// 3. UPDATE a note
exports.updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        await Note.update({ title, content }, { where: { id: req.params.id, userId: req.user.id } });
        res.json({ message: "Note updated successfully" });
    } catch (err) {
        res.status(500).json({ message: "Update failed" });
    }
};

// 4. DELETE a note
exports.deleteNote = async (req, res) => {
    try {
        await Note.destroy({ where: { id: req.params.id, userId: req.user.id } });
        res.json({ message: "Note deleted" });
    } catch (err) {
        res.status(500).json({ message: "Delete failed" });
    }
};