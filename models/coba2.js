const Mongoose = require("mongoose");

var userSchema = new Mongoose.Schema({
  nama: { type: String, required: true },
  prdoduk: { type: String, required: true },
  expired: { type: String, required: true },
  category: { type: String, required: true },
});

const Product = Mongoose.model("coba2", userSchema);

module.exports = Product;
