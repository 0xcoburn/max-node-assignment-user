const fs = require("fs");
const path = require("path");
const Product = require("../model/productModel");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("home", { prods: products, pageTitle: "home Bitch" });
  });
};

exports.getAddProducts = (req, res, next) => {
  res.render("add-plane", { pageTitle: "Add a plane bitch" });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
