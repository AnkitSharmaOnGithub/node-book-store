const http = require("http");
const path = require('path');

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','pug');
app.set('views','views');
app.use(express.static(path.join(__dirname,'/public')));


app.use('/',(req, res, next) => {
  res.render('index');
});

const server = http.createServer(app);
server.listen(8000);
