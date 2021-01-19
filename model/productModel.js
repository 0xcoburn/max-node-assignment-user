const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "product.json"
);

function getProductsFromFile(cb) {
  fs.readFile(p, (err, data) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(data));
  });
}

class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}

module.exports = Product;
