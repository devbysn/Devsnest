const bodyParser = require("body-parser");
var express = require("express");
var app = express();
VAR bodyParser = require('body-parser');

app.get(
  "/",
  (req, res, next) => {
    console.log("In First");
    next();
  },
  (req, res, next) => {
    res.status(200);
    console.log("Request");
  }
);
