const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/add-plane", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-plane.html"));
});

router.post("/add-plane", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
