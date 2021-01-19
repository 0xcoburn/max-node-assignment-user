const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "product.json"
);

class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    fs.readFile(p, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, data) => {
      if (err) {
        return cb([]);
      }
      return cb(JSON.parse(data));
    });
  }
}

module.exports = Product;
