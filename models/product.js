const Mongoose = require("mongoose");

var userSchema = new Mongoose.Schema({
  username: { type: String },
  product: { type: String },
  expired: { type: String },
  image: { type: String },
  category: { type: String },
});

const Product = Mongoose.model("product", userSchema);

module.exports = Product;
