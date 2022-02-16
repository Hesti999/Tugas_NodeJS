const express = require("express");
const Routes = express.Router();

// Middleware
const requireAuth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

// Controller
const logRes = require("../controller/loginRegis");
const registrasi = require("../controller/registrasi");
const login = require("../controller/login");
// const home = require("../controller/home");
const product = require("../controller/product");
const detail = require("../controller/detail");
const controller = require("../controller/controller");

// // Controller
Routes.get("/", logRes.getLoginRegis);

Routes.get("/sign-up", registrasi.getRegistrasi);
Routes.post("/sign-up", registrasi.postRegistrasi);

Routes.get("/login", login.getLogin);
Routes.post("/login", login.postLogin);

Routes.get("/home/:username", product.getHome);

Routes.get("/product/:username", product.getProduct);
// Routes.post("/product/:username", upload.single("image"), product.postProductExp);

Routes.delete("/detail", requireAuth, detail.deleteDetail);
Routes.get("/detail/:product", requireAuth, detail.getDetail);

Routes.get("/add-product/:username", requireAuth, product.getProductExp);

// API;
Routes.post("/api/product/:username", upload.single("image"), controller.create);
Routes.get("/api/product/:username", controller.find);

Routes.put("/api/detail/:name", controller.update);
Routes.delete("/api/detail/:product", controller.delete);

module.exports = Routes;
