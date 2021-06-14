const express = require('express');
const queries = require('./orderDetails.queries');
const router = express.Router();

router.get('/', async (req, res) => {
    const orderdetails = await queries.find();
    res.json(orderdetails);
});

// grabs ID from the url to pass through the query which will return the product
router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const orderdetails = await queries.get(id);
        if (orderdetails) {
            return res.json(orderdetails);
        }
        return next();
    } catch (error) {
        next(error);
    }
});



module.exports = router;