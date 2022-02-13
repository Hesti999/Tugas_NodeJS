const JWT = require("jsonwebtoken");
const Product = require("../models/product");
const userModel = require("../models/user");

exports.getHome = (req, res) => {
  // const post = await userModel.findOne({ email: req.body.email });
  // const data = await userModel.find();
  const { name, email } = req.body;
  res.send({ name, email });
  //   name: post.name,
  //   email: post.email,
  //   _id: post._id,
  // }
};
