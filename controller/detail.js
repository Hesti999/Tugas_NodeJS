const produkModel = require("../models/product");
const userModel = require("../models/user");

exports.getDetail = async (req, res) => {
  const product = await produkModel.findOne({ product: req.params.product });
  res.render("detail", {
    product,
  });
};

exports.deleteDetail = async (req, res) => {
  const user = await produkModel.findOne({ product: req.body.product });
  produkModel.deleteOne({ product: req.body.product }).then((result) => {
    res.redirect(`/product/${user.user}`);
  });
};
