const express = require('express');
const Product = require('./product.model');
// imports queries
const queries = require('./products.queries');
// gives an instance of a router
const router = express.Router();

// calls the query to get product table info
router.get('/', async (req, res) => {
    const products = await queries.find();
    res.json(products);
});

// grabs ID from the url to pass through the query which will return the product
router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    // if product exists, respond with the product
    try {
        const product = await queries.get(id);
        if (product) {
            return res.json(product);
        }
        return next();
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    // try {
    //   // TODO: set user id by logged in user
    //   const product = await Product.query().insert(req.body);
    //   res.json(product);
    // } catch (error) {
    //   next(error);
    // }
  });



module.exports = router;