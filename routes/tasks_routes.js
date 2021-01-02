// Importing Express and initiating router
const express = require("express");
const router = express.Router();

const tasksController = require('../controllers/tasks_controller');

router.get("/", tasksController.getBooks);

router.get("/add", tasksController.addBooks);

router.get("/view", (req, res, next) => {
  res.send("On View");  
});

module.exports = router;
