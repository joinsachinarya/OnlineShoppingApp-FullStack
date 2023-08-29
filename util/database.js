const { Sequelize } = require("sequelize");
const dbConfig = {
  database: "shoppingDB",
  usrename: "root",
  password: "Password!@#$",
  host: "localhost",
  dialect: "mysql",
};
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.usrename,
  dbConfig.password,
  {
    dialect: dbConfig.dialect,
    host: dbConfig.host,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Server authenticated database.");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = sequelize;
