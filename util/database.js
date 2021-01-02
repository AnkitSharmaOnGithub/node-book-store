const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  database: "tasks_db",
  user: "root",
  password: "bitnami",
});
