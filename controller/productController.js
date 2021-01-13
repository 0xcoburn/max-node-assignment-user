const products = [];

exports.getProducts = (req, res, next) => {
  res.render("home", { prods: products, pageTitle: "home Bitch" });
};

exports.getAddProducts = (req, res, next) => {
  res.render("add-plane", { pageTitle: "Add a plane bitch" });
};

exports.postAddProducts = (req, res, next) => {
  console.log(req.body.title);
  products.push({ title: req.body.title });
  console.log(products);
  res.redirect("/");
};
