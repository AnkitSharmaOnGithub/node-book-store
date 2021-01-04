const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Tasks = sequelize.define('tasks', {
        task_id : {
            type : Sequelize.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        task_name : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        task_desc : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        task_date : {
            type : Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
});

module.exports = Tasks;