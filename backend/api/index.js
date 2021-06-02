const express = require('express');

const products = require('./routes/products/products.routes');

const router = express.Router();
router.use('/products', products);

module.exports = router;