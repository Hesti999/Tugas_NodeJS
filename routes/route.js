const express = require("express");
const route = express.Router();

// controller API
const controller = require("../controller/controller");

//API
route.post("/api/products/", controller.create);
route.get("/api/products", controller.find);
route.put("/api/detail/:name", controller.update);
route.delete("/api/detail/:id", controller.delete);

module.exports = route;
