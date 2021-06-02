const express = require('express');
const api = require('./api');

// creates the app
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Inventory App',
    });
});

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