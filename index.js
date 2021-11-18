const express = require("express");
const app = express();
const calValue = require("./Controller/controller");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/", function (req, res) {
  res.send(5);
});
app.post("/add", function (req, res) {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let ans = a + b;
  res.send(JSON.stringify({ ans: ans }));
});
app.post("/div", function (req, res) {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let ans = a / b;
  res.send(JSON.stringify({ ans: ans }));
});
app.post("/sub", function (req, res) {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let ans = a - b;
  res.send(JSON.stringify({ ans: ans }));
});
app.post("/mul", function (req, res) {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let ans = a * b;
  res.send(JSON.stringify({ ans: ans }));
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
