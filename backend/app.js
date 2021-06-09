const express = require('express');
const api = require('./api');
const app = express(); // creates the app
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
});

app.get('/api/orderForm', (req, res) => {
    res.sendFile(path.resolve('./public/orderForm.html'));
});

// routes
app.use('/api/routes', api);


// error handlers
function notFound(req, res, next) {
    const error = new Error('Not Found.');
    res.status(404);
    next(error);
};

function errorHandler(error, req, res, next) {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(status);
    res.json({
        message: error.message
    });
}

module.exports = app;