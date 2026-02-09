const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('markdown_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;