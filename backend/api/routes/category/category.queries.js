const db = require('../../../db/db');
const Knex = require('knex');

const fields = ['cat_id', 'cat_name'];

module.exports = {
    find() {
        return db('category').select(fields);
    },
};