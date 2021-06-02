const express = require('express');

// imports queries
const queries = require('./products.queries');

// gives an instance of a router
const router = express.Router();

// calls the query to get product table info
router.get('/', async (req, res) => {
    const products = await queries.find();
    res.json(products);
});

module.exports = router;