const db = require('../../../db/db');
const Knex = require('knex');

const fields = ['order_id', 'staff_id', 'order_date'];

module.exports = {
    find() {
        return db('productorder').select(fields);
    },
};