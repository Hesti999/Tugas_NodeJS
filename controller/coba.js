const Product = require("../models/product");

exports.getHome = (req, res) => {
  const params = req.params.username;
  res.render("home", {
    params,
    title: "Home",
  });
};

exports.getProduct = async (req, res) => {
  params = req.params.username;
  const products = await Product.find({ user: params });
  res.render("product", {
    params,
    products,
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
  });
  const createProduct = newProductModel.save(newProductModel);
  res.redirect(`/product/${params}`);
};
