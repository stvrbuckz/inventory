const Knex = require('knex');
const db = require('../../../db/db');

const fields = ['order_id', 'prod_id', 'supplier_id', 'supplier_price', 'order_quantity', 'order_total'];
const order_id = ['order_id'];

module.exports = {
    find() {
        return db('orderdetails').select(fields);
    },
    async get(order_id) {
        return db('orderdetails')
            .select(fields)
            .where({
                order_id,
            })
            .first();
        // const [orderDetails] = await db('orderdetails')
        //     .select(fields)
        //     .where('order_id','=', id);
        // return orderDetails;
    },  
};
