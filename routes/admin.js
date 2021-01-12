const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/add-plane", (req, res, next) => {
  res.render("home", {});
});

router.post("/add-plane", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = router;
