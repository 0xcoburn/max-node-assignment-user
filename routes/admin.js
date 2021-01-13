const express = require("express");

const router = express.Router();

const productController = require("../controller/productController");

router.get("/add-plane", productController.getAddProducts);

router.post("/add-plane", productController.postAddProducts);

exports.router = router;
