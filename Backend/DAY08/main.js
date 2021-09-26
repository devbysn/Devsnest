<<<<<<< HEAD
const bodyParser = require("body-parser");
var express = require("express");
var app = express();
VAR bodyParser = require('body-parser');

=======
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = 3000;

app.use(express.urlencoded());

app.use(express.json());
>>>>>>> Backend files updated
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
<<<<<<< HEAD
=======

app.post("/", (req, res) => {
  console.log("Req.body ->", req.body);
  res.json({ text: req.body });
});

app.listen(PORT, () => {
  console.log(`server has started at ${PORT}`);
});
>>>>>>> Backend files updated
