const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
const snakegame = require("./routes/snakegame");
const crawler = require("./routes/crawler");

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("main"));
app.use(express.static("snakegame"));
app.use(express.static("nextBoard"));
app.use(express.static("gramDown"));
app.use(express.static("videoChat"));
app.use("/snakegame", snakegame);
app.use("/crawler", crawler);
app.get("/snakegame", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname + "/snakegame/snake.html"));
});
app.get("/profile", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.sendFile(path.join(__dirname + "/main/data/profile.json"));
});
// app.get("/nextBoard", (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text.html");
//   res.sendFile(
//     path.join(__dirname + "/nextBoard/.next/server/pages/index.html")
//   );
// });
app.get("/gramDown", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname + "/gramDown/index.html"));
});
app.get("/videoChat", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname + "/videoChat/index.html"));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
