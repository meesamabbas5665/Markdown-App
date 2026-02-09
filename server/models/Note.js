const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Note = sequelize.define('Note', {
    title: { type: DataTypes.STRING, defaultValue: 'Untitled' },
    content: { type: DataTypes.TEXT('long'), allowNull: true }, // LONGTEXT for high word count
    userId: { type: DataTypes.INTEGER, allowNull: false } // Links note to a specific user
});

module.exports = Note;