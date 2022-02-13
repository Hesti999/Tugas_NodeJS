const express = require("express");
const Routes = express.Router();
const requireAuth = require("../middleware/authMiddleware");

// Controller
const logRes = require("../controller/loginRegis");
const registrasi = require("../controller/registrasi");
const login = require("../controller/login");
const home = require("../controller/home");
const product = require("../controller/coba");
const detail = require("../controller/detail");

// Controller
Routes.get("/", logRes.getLoginRegis);

Routes.get("/sign-up", registrasi.getRegistrasi);
Routes.post("/sign-up", registrasi.postRegistrasi);

Routes.get("/login", login.getLogin);
Routes.post("/login", login.postLogin);

Routes.get("/home/:username", requireAuth, product.getHome);

Routes.get("/product/:username", product.getProduct);
Routes.post("/product/:username", product.postProductExp);

Routes.delete("/detail", detail.deleteDetail);
Routes.get("/detail/:product", detail.getDetail);

Routes.get("/add-product/:username", product.getProductExp);
// Routes.post("/add-product/:name", product.postProductExp);

// Routes.get("/home", home.getHome);
// Routes.get("/home", home.getHome);
// Routes.get("/home", home.getHome);
module.exports = Routes;
