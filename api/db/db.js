const Sequelize = require("sequelize");

const db = new Sequelize("propiedades1", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;