const express = require("express");
const router = express.Router();
const auth = require("./auth");
const products = require("./products");
const admin = require("./admin");
const users = require("./users");
const favorites= require("./favorites")
var cors = require("cors");

router.use(cors());

// /api/

//PRODUCTS
router.use("/products", products);

//USERS (passport, rol admin)
router.use("/users", users);
router.use("/auth", auth);
router.use("/admin", admin);

//FAVORITES
router.use("/favorites", favorites)


//PROBANDO RUTA
router.get("/", (req, res) => {
  res.send("ANDA");
});

module.exports = router;
