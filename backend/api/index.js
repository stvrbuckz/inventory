const express = require('express');

const products = require('./routes/products/products.routes');
const staff = require('./routes/staff/staff.routes');

const router = express.Router();

router.use('/products', products);
router.use('/staff', staff);

module.exports = router; 