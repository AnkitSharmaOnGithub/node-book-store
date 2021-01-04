const Sequelize = require('sequelize');

const sequelize = new Sequelize('tasks_db','root','bitnami', {
  dialect : 'mysql',
  host : 'localhost'
});

module.exports = sequelize;

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "tasks_db",
//   password: "bitnami",
// });

// module.exports = pool.promise();

