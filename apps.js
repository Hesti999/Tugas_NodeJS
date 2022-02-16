const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const methodOverride = require("method-override");

const app = express();

const Cors = require("cors");

dotenv.config({ path: "convig.env" });

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
app.use("/uploads", express.static("uploads"));
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Cors());

app.use(require("./routes/routes"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(3000, () => console.log("Connection Succes"));
  })
  .catch((err) => console.log(err));
