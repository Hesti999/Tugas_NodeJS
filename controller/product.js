const Product = require("../models/product");
const axios = require("axios");

exports.getHome = (req, res) => {
  const params = req.params.username;
  res.render("home", {
    params,
    title: "Home",
  });
};

exports.getProduct = async (req, res) => {
  axios
    .get("http://localhost:3000/api/product/:username")
    .then(function (response) {
      const params = req.params.username;
      res.render("product", { products: response.data, params });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getProductExp = (req, res) => {
  const params = req.params.username;
  res.render("add-product", {
    title: "Add Product",
    params,
  });
};

exports.postProductExp = (req, res) => {
  const params = req.params.username;
  const newProductModel = new Product({
    user: params,
    product: req.body.product,
    expired: req.body.expired,
    category: req.body.category,
    image: req.file.path,
  });

  const createProduct = newProductModel.save(newProductModel);
  res.redirect(`/product/${params}`);
};
