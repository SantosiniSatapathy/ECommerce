const Sequelize = require('sequelize');

const db = new Sequelize('e_comm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });

  module.exports = db;