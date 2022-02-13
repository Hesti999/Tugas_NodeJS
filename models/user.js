const Mongoose = require("mongoose");

var userSchema = new Mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = Mongoose.model("user", userSchema);

module.exports = User;
