const express = require('express');
const queries = require('./order.queries');
const router = express.Router();

router.get('/', async (req, res) => {
    const order = await queries.find();
    res.json(order);
});

module.exports = router;