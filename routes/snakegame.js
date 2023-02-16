const fs = require("fs");
const express = require("express");
const router = express.Router();
const credit = require("../snakegame/data/credit.json");
router.get("/credit", async (req, res) => {
  try {
    res.json(JSON.stringify(credit));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/rank", async (req, res) => {
  try {
    let rank = require("../snakegame/data/ranking.json");
    res.setHeader("Content-Type", "application/json");
    console.log("GET Request");
    res.json(JSON.stringify(rank));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/rank", async (req, res) => {
  try {
    const data = req.body;
    fs.writeFile(
      "./snakegame/data/ranking.json",
      JSON.stringify(data),
      "utf8",
      (err) => err && console.log(err)
    );
    res.status(200);
    return res.send({ response: "랭킹이 등록되었습니다." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
