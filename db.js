const { Sequelize } = require('sequelize');
const config = require('config');

const dbConfig = config.get('dbConfig');

const db = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql'
});

module.exports = db;