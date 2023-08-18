const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "sys",
  password: "sachinandarya",
});
module.exports = pool.promise();
