const express = require('express');
const queries = require('./category.queries');
const router = express.Router();

// calls the query to get category table info
router.get('/', async (req, res) => {
    const category = await queries.find();
    res.json(category);
});

module.exports = router;