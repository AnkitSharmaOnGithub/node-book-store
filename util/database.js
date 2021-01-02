const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "tasks_db",
  password: "bitnami",
});

module.exports = pool.promise();
