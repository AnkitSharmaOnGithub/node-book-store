// Importing Express and initiating router
const express = require("express");
const router = express.Router();

const tasksController = require('../controllers/tasks_controller');


router.get("/add", tasksController.addBook);

router.post("/add", tasksController.postAddBook);

router.get("/view", tasksController.viewTasks);

router.get("/view/:id", tasksController.viewTask);

router.get("/", tasksController.getBooks);

module.exports = router;
