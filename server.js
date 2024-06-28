const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const snakegame = require("./routes/snakegame");
const crawler = require("./routes/crawler");

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("main"));
app.use(express.static("snakegame"));
app.use(express.static("nextBoard"));
app.use(express.static("videoChat"));
app.use("/snakegame", snakegame);
app.use("/crawler", crawler);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"))
})
app.get("/snakegame", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname + "/snakegame/snake.html"));
});
app.get("/videoChat", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname + "/videoChat/index.html"));
});

app.listen(3000);

module.exports = app;