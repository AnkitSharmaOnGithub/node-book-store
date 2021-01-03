// Importing Node Native Modules
const http = require("http");
const path = require("path");

// Importing 3rd Party Modules
const express = require("express");
const bodyParser = require("body-parser");

// Setting Project Initials
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");
app.set("views", "views");

// Setting Routes and static files Path
const routes = require("./routes/tasks_routes");
app.use(express.static(path.join(__dirname, "/public")));
app.use(routes);

const server = http.createServer(app);
server.listen(8000);
