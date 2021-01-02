// Importing Express and initiating router
const express = require("express");
const router = express.Router();



router.get("/", 

router.get("/add", (req, res, next) => {
  res.send("On Add");
});

router.get("/view", (req, res, next) => {
  res.send("On View");  
});

module.exports = router;
