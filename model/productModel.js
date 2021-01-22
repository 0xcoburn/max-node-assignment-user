const path = require("path");
const fs = require("fs").promises;

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    fs.readFile(p)
      .then((data) => JSON.parse(data))
      .catch((err) => [])
      .then((products) => {
        products.push(this);
        console.log(products);
        fs.writeFile(p, JSON.stringify(products));
      });
    //   } catch (err) {
    //     products = [];
    //   } finally {
    //     products.push(this);
    //     await fs.writeFile(p, JSON.stringify(products));
    //   }
  }
  // async save() {
  //   let data;
  //   let products;
  //   try {
  //     data = await fs.readFile(p);
  //     products = JSON.parse(data);
  //   } catch (err) {
  //     products = [];
  //   } finally {
  //     products.push(this)
  //     await fs.writeFile(p, JSON.stringify(products));
  //   }
  // }

  static fetchAll() {
    return fs
      .readFile(p)
      .then((data) => JSON.parse(data))
      .catch((err) => []);
  }
}

//   static async fetchAll() {
//     let products;
//     let data;
//     try {
//       data = await fs.readFile(p);
//       products = JSON.parse(data);
//     } catch (err) {
//       products = [];
//     } finally {
//       return products;
//     }
//   }
// }

module.exports = Product;
