const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Quiz = db.define('Quiz', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // Weitere Felder nach Bedarf
});

module.exports = Quiz;