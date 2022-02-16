const Product = require("../models/product");

// create and save user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Can not be empty" });
    return;
  }

  const params = req.params.username;
  const product = new Product({
    user: req.params.username,
    product: req.body.product,
    expired: req.body.expired,
    image: req.file.path,
    category: req.body.category,
  });

  product
    .save(product)
    .then((data) => {
      res.redirect(`/product/${params}`);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while creating a create operation",
      });
    });
};

//retrieve and return all users a single user
exports.find = (req, res) => {
  const params = req.params.username;
  Product.find({ user: params })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error Occurred while retriving user information" });
    });
};

// update a new user by user id
exports.update = (req, res) => {};

// delete a user with specified user id in the request
exports.delete = (req, res) => {
  const product = req.params.produdct;

  Product.findOneAndDelete(product)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete ${product}.` });
      } else {
        res.send({
          message: "Product was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product=" + product,
      });
    });
};
