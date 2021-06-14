const express = require('express');
const queries = require('./routes/products/products.queries');

window.addEventListener('load', (event) => {
    const products = queries.find();
});