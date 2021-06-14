const { Model } = require('objection');

const productTable = 'product';

class Product extends Model {
    static get productTable() {
      return productTable.item;
    }
}

module.exports = Product;