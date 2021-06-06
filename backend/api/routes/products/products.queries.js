const db = require('../../../db/db');

const fields = ['prod_id', 'prod_name', 'prod_brand', 'prod_price', 'is_available', 'available_quantity', 'location'];
const id = ['prod_id'];

module.exports = {
    find() {
        // filter by...
        return db('product').select(fields);
    },
    // get by product ID
    async get(id) {
        const [product] = await db('product')
            .select(fields)
            .where('prod_id','=', id);
        return product;
    },
};