var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// requirements
//-------level 1-----------
// *email *firstname *lastname *password *confirmPassword ==> req.body
//email validate - string
//password Validite
//password==confirmPassword
//--------------level 2-------------
// JS / SQL injections
//---------level 3 ------------
//check if email exists
//password hash
//email->lowercase
//save

router.post("/register", registerInitialCheck, register);

module.exports = router;
