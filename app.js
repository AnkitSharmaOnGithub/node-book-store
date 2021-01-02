const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.use((req, res, next) => {
  res.send("From 2nd");
});

const server = http.createServer(app);
server.listen(8000);
