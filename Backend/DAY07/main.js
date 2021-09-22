const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hemlo");
});

//This path will match acd and abcd
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

//This route will match abcd  abxcd x=>any number of b's
app.get("ab+cd", (req, res) => {
  res.send(req.params.id);
});

//This route will match abxcd
app.get("/ab*cd", (req, res) => {
  res.send("any number of statements bwetween ab and cd");
});

//This route will match abe and abcde
app.get("/ab(cd)?e", (req, res) => {
  res.send(req.params.id);
});

//This route will match butterfly and dragon fly
app.get(/.*fly$/, (req, res) => {
  res.send("fly wala statement");
});

app.get("/user/:id/books/:bookId", (req, res) => {
  console.log(req.params.bookId);
  res.send(req.params.id);
});
app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`);
});
