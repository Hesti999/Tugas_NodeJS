const Mongoose = require("mongoose");

var userSchema = new Mongoose.Schema({
  user: { type: String, required: true },
  product: { type: String, required: true },
  expired: { type: String, required: true },
  // pict: { type: String, required: true },
  category: { type: String, required: true },
});

const Product = Mongoose.model("product", userSchema);

module.exports = Product;
