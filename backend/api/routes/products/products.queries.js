const db = require('../../../db/db');
const Knex = require('knex');

module.exports = {
    find() {
        // filter by...
        return db('product').select('prod_id', 'prod_name', 'prod_brand', 'prod_price', 'is_available', 'available_quantity', 'location');
    },
};