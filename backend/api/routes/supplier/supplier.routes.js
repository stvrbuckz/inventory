const express = require('express');
// imports queries
const queries = require('./supplier.queries');
// gives an instance of a router
const router = express.Router();

// calls the query to get product table info
router.get('/', async (req, res) => {
    const supplier = await queries.find();
    res.json(supplier);
});

// grabs ID from the url to pass through the query which will return the product
router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const supplier = await queries.get(id);
        if (supplier) {
            return res.json(supplier);
        }
        return next();
    } catch (error) {
        next(error);
    }
});

module.exports = router;