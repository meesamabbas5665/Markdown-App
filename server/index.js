const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();

// CRITICAL: You must have these two lines
app.use(cors());
app.use(express.json()); 

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

// Update "alter: true" to force XAMPP to update your tables
sequelize.sync({ alter: true }).then(() => {
    console.log("XAMPP MySQL Connected & Tables Synced");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));