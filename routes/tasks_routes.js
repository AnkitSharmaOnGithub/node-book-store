// Importing Express and initiating router
const express = require("express");
const router = express.Router();

const tasksController = require('../controllers/tasks_controller');


router.get("/add", tasksController.addTask); // Handles Add a Task [GET REQUEST]

router.post("/add", tasksController.postAddTask);  // Handles Add a Task [POST REQUEST]

router.get("/view", tasksController.viewTasks);  //  Handles View All Tasks request

router.get("/view/:id", tasksController.viewTask);  // Handles View Single Task request

router.get("/delete/:id", tasksController.deleteTask);  // Handles Delete Task request

router.get("/edit/:id", tasksController.editTask);  // Handles Edit Task GET request

router.post("/edit/:id", tasksController.postEditTask);  // Handles Edit Task POST request

router.get("/", tasksController.getTasks); // Handles Home Page request

module.exports = router;
