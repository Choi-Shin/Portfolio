const fs = require("fs");
const path = require("path");
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const router = express.Router();
const jsonLink = "?__a=1&__d=dis";
let data;
const getHtml = async (link) => {
  try {
    return await axios.get(link + jsonLink);
  } catch (err) {
    console.error(err);
  }
};

router.post("/", (req, res) => {
  const link = req.body.link;
  getHtml(link).then((html) => {
    const $ = cheerio.load(html.data);
    data = $("pre")._root[0]["children"]["graphql"]["shortcode_media"];
    console.log(data);
  });
});
module.exports = router;
