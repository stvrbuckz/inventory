const db = require('../../../db/db');

const fields = ['supplier_id', 'supplier_name', 'supplier_address', 'supplier_city', 'supplier_telephone', 'supplier_email'];
const id = ['supplier_id'];

module.exports = {
    find() {
        // filter by...
        return db('supplier').select(fields);
    },
    // get by product ID
    async get(id) {
        const [supplier] = await db('supplier')
            .select(fields)
            .where('supplier_id','=', id);
        return supplier;
    },
};
