const express = require('express');
const api = require('./api');
const app = express(); // creates the app
const path = require('path');
// const del = require('./api/routes/products/crudQueries');
const bodyParser = require("body-parser");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

require("./routes/product.routes")(app);
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

// app.delete('/products/:id', del.deleteUploadById)

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
