const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "tasks_db",
  password: "bitnami",
});

module.exports = pool.promise();
