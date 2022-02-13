const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
const userModel = require("../models/user");

exports.getRegistrasi = (req, res) => {
  res.render("registrasi", {
    statusCode: 200,
    title: "Sign Up",
  });
};

exports.postRegistrasi = async (req, res) => {
  // const { name, email, password, confirmPassword } = req.body;
  // Check if the password and confirm password fields match
  if (req.body.password === req.body.confirmPassword) {
    //   // Check if user with the same email is also registered
    let DataFind = await userModel.findOne({ email: req.body.email });
    let DataUsername = await userModel.findOne({ username: req.body.username });

    if (DataFind || DataUsername) {
      res.render("registrasi", {
        message: "User already registered.",
        messageClass: "alert-danger",
        statusCode: 403,
        title: "Sign Up",
      });
    } else {
      const newUserModel = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: cryptr.encrypt(req.body.password),
      });
      const createUser = newUserModel.save(newUserModel);
      if (createUser) {
        res.render("login", {
          title: "Login",
          message: "Registration Complete. Please login to continue.",
          messageClass: "alert-success",
          DataFind,
          statusCode: 201,
        });
      } else {
        res.send({
          message: `Failed to create data`,
          statusCode: 500,
        });
      }
    }
  } else {
    res.render("registrasi", {
      message: "Password does not match.",
      messageClass: "alert-danger",
      title: "Sign Up",
    });
  }
};

// body: body,
// image: image,
// author: {
//   uid: 1,
//   name: "Hesti Ariyani",

// users.push({
//   name,
//   email,
//   password: cryptr.encrypt(password),
// });

// res.render("login", {
//   title: "Login",
//   message: "Registration Complete. Please login to continue.",
//   messageClass: "alert-success",
//   statusCode: 201,
// });
