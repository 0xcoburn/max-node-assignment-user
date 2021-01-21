const path = require("path");
const fs = require("fs").promises;

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "product.json"
);

class Product {
  constructor(t) {
    this.title = t;
  }

  async save() {
    let products;
    try {
      let data = await fs.readFile(p);
      products = JSON.parse(data);
    } catch {
      products = [];
    } finally {
      products.push(this);
      await fs.writeFile(p, JSON.stringify(products));
    }
  }
  static async fetchAll() {
    let products;
    let data;
    try {
      data = await fs.readFile(p);
      products = JSON.parse(data);
    } catch (err) {
      products = [];
    } finally {
      return products;
    }
  }
}

module.exports = Product;
