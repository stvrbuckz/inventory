const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

// Create and Save a new product
exports.create = (req, res) => {
  // Validate request
  if (!req.body.prod_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a product
  const product = {
    prod_id: req.body.prod_id,
    cat_id: req.body.cat_id,
    sku: req.body.sku,
    prod_name: req.body.prod_name,
    prod_brand: req.body.prod_brand,
    prod_size: req.body.prod_size,
    colour: req.body.colour,
    prod_price: req.body.prod_price,
    location: req.body.location,
    prod_descrip: req.body.prod_descrip,
    is_available: req.body.is_available,
    available_quantity: req.body.available_quantity,
    is_discount: req.body.is_discount,
    discount: req.body.discount,
    manufactured: req.body.manufactured // Removed trailin comma
  };

  // Save product in the database
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product."

      });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  const prod_id = req.query.prod_id;
  var condition = prod_id ? { prod_id: { [Op.iLike]: `%${prod_id}%` } } : null;

  Product.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};

// Find a single product with an id
exports.findOne = (req, res) => {
  const prod_id = req.params.prod_id;

  Product.findByPk(prod_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving product with id=" + prod_id
      });
    });
};

// Update a product by the id in the request
exports.update = (req, res) => {
  const prod_id = req.params.prod_id;

  Product.update(req.body, {
    where: { prod_id: prod_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update product with id=${prod_id}. Maybe product was not found or req.prod_id is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating product with id=" + prod_id
      });
    });
};

// Delete a product with the specified prod_id in the request
exports.delete = (req, res) => {
  const prod_id = req.params.prod_id;

  Product.destroy({
    where: { prod_id: prod_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "product was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete product with id=${prod_id}. Maybe product was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete product with id=" + prod_id
      });
    });
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} products were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all products."
      });
    });
};

// find all published product
exports.findAllPublished = (req, res) => {
  Product.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};
