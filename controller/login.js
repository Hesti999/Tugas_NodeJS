const JWT = require("jsonwebtoken");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");

const userModel = require("../models/user");

exports.getLogin = async (req, res) => {
  res.render("login", {
    title: "Login",
  });
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  let DataFind = await userModel.findOne({ email: email });

  if (DataFind) {
    let Password = cryptr.decrypt(DataFind.password);
    if (Password != password) {
      res.render("login", {
        message: "Invalid email or password",
        messageClass: "alert-danger",
        statusCode: 400,
      });
    } else {
      let token = JWT.sign({ email: DataFind.email }, "myTotalySecretKey", { expiresIn: "1h" });
      res.cookie("jwt", token, { httpOnly: true });
      res.redirect(`/home/${DataFind.username}`);
    }
  } else {
    res.render("login", {
      title: "Login",
      message: "Invalid email or password",
      messageClass: "alert-danger",
      statusCode: 400,
    });
  }
};
