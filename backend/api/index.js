const express = require('express');
const db = require('../db/db');

// function retrieveTable(tableName, fields) {
//     find() 
//         c = db(tableName).select(fields);
    
//     return c;
// };

// let result = retrieveTable('product', ['prod_id', 'prod_name']);
// console.log(result);

const products = require('./routes/products/products.routes');
const category = require('./routes/category/category.routes');
const supplier = require('./routes/supplier/supplier.routes');
const order = require('./routes/order/order.routes');
const orderDetails = require('./routes/orderDetails/orderDetails.routes');
const staff = require('./routes/staff/staff.routes');
const auth = require('./routes/auth/auth.routes');

const router = express.Router();

router.use('/products', products);
router.use('/category', category);
router.use('/supplier', supplier);
router.use('/order', order);
router.use('/orderDetails', orderDetails);
router.use('/staff', staff);
router.use('/auth', auth);

// function notFound(req, res, next) {
//     const error = new Error('Not Found.');
//     res.status(404);
//     next(error);
// };

module.exports = router; 