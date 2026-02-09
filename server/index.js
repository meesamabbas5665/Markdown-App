const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/notes', require('./routes/noteRoutes'));

// Start Server and Sync Tables
sequelize.sync({ alter: true }).then(() => {
    console.log("Database synced and tables updated");
}).catch(err => console.log("DB sync error: ", err));