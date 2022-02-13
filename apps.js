const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const exphbs = require("express-handlebars");

const methodOverride = require("method-override");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

// Konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// setup method override
app.use(methodOverride("_method"));

// Setup ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// const crypto = require("crypto");

const Dotenv = require("dotenv");
const Cors = require("cors");

// Dotenv.config({ path: "./config/Config.env" });
app.use(Cors());

// const getHashedPassword = (password) => {
//   const sha256 = crypto.createHash("sha256");
//   const hash = sha256.update(password).digest("base64");
//   return hash;
// };

// app.get("/", function (req, res) {
//   res.render("log-reg");
// });

// app.get("/register", (req, res) => {
//   res.render("registrasi");
// });
const routes = require("./routes/routes");
app.use(routes);

// const Cryptr = require("cryptr");
// const cryptr = new Cryptr("myTotalySecretKey");

// app.post("/registrasi", (req, res) => {
//   const { name, email, password, confirmPassword } = req.body;
//   // Check if the password and confirm password fields match
//   if (password === confirmPassword) {
//     // Check if user with the same email is also registered
//     if (users.find((user) => user.email === email)) {
//       res.render("registrasi", {
//         message: "User already registered.",
//         messageClass: "alert-danger",
//       });

//       return;
//     }

//     // const hashedPassword = getHashedPassword(password);

//     // Store user into the database if you are using one
//     users.push({
//       name,
//       email,
//       password: cryptr.encrypt(password),
//     });

//     res.json(users);
//     //   .render("login", {
//     //     message: "Registration Complete. Please login to continue.",
//     //     messageClass: "alert-success",
//     //   })
//   } else {
//     res.render("registrasi", {
//       message: "Password does not match.",
//       messageClass: "alert-danger",
//     });
//   }
// });

// const generateAuthToken = () => {
//   return crypto.randomBytes(30).toString("hex");
// };

// const authTokens = {};

const JWT = require("jsonwebtoken");

//     // const authToken = generateAuthToken();
//     // // Store authentication token
//     // authTokens[authToken] = user;

//     // // Setting the auth token in cookies
//     // res.cookie("AuthToken", authToken);
//
//     }

//     // Redirect user to the protected page
//     // res.redirect("/home");
//   }
// });

const JWTModule = require("./module/JWTCheck");

const verifikasitoken = require("./middleware/verivytoken");
const post = require("./cont");

// app.get("/home", verifikasitoken, post.homeCont);

// app.use((req, res, next) => {
//   // Get auth token from the cookies
//   const authToken = req.cookies["AuthToken"];

//   // Inject the user to the request
//   req.user = authTokens[authToken];

//   next();
// });

// app.get("/home", (req, res) => {
//   if (req.user) {
//     res.render("home");
//   } else {
//     res.render("login", {
//       message: "Please login to continue",
//       messageClass: "alert-danger",
//     });
//   }
// });

mongoose
  .connect("mongodb+srv://Hest:123@cluster0.imovk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => {
    app.listen(3000, () => console.log("Connection Succes"));
  })
  .catch((err) => console.log(err));
