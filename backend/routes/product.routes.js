module.exports = app => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Create a new product
  router.post("/add", products.create);

  // Retrieve all products
  router.get("/", products.findAll);

  // Retrieve all published products
  router.get("/published", products.findAllPublished);

  // Retrieve a single product with id
  router.get("/:id", products.findOne);

  // Update a product with id
  router.put("/:id", products.update);

  // Delete a product with id
  router.delete("/:id", products.delete);

  // Delete all products
  router.delete("/", products.deleteAll);

  router.get('/', function(req, res, next) {
    sql.connect(config).then(() => {
        return sql.query`select Project_Type_Desc from Project_Type`
    }).then(result => {
        console.log(result)
        // Pass the DB result to the template
        res.render('newProject', {dropdownVals: result})
    }).catch(err => {
        console.log(err)
    })
});

  app.use("/api/products", router);
};
