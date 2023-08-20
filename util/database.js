const Sequelize = require("sequelize");

const sequelize = new Sequelize("sys", "root", "sachinandarya", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
