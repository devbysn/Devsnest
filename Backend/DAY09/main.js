var express = require("express");
var app = express();
var PORT = 3000;
var path = require("path");
var jade = require("jade");

app.use(express.urlencoded());
app.set("views", path.join(__dirname, "views"));
// app.set("view  engine", "jade");
app.set("view engine", "jade");

const checkAdmin = (req, res, next) => {
  if (req.query.auth === "xyzxyzxyz") {
    next();
  } else {
    res.status(401).send("Shoudl be Admin !");
  }
};

console.log(__dirname);

// app.use("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/hello.json"));
// });

app.use("/", (req, res) => {
  // res.download(path.join(__dirname, "/download.jpeg"), "Antariksh.jpeg");
  // res.render("index", { title: "Express" });
  res
    .status(201)
    .cookie("Token", "Test", {
      expire: new Date(Date.now() + 8 * 3600000),
    })
    .cookie("Hemlo", "Hemlo")
    .redirect(301, "/admin");
});

app.get("/admin", (req, res) => {
  res.send("Hemlo World");
});
app.listen(PORT, () => {
  console.log(`server has started at ${PORT}`);
});
