const Knex = require('knex');
const db = require('../../../db/db');

const fields = ['order_id', 'prod_id', 'supplier_id', 'supplier_price', 'order_quantity', 'order_total'];
const id = ['order_id'];

module.exports = {
    find() {
        return db('orderdetails').select(fields);
    },
    async get(id) {
        // const [orderdetails] = await db('orderdetails')
        //     .select(fields)
        //     .where('order_id','=', id);
        const [orderdetails] = Knex.knex('orderdetails')
            .join('productorder', 'order_id', 'productorder.order_id')
            .select(fields)
            .where('order_id','=', id);
        return orderdetails;
    },
};
