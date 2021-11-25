const express = require("express");
const router = express.Router();
var cors = require("cors");
const Products= require("../models/Products")
router.use(cors());


// /api/products
//ACA HACER LO DE LAS CATEGORIAS

router.get("/", (req, res, next) => {
  Products.findAll()
    .then((data) => res.send(data))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Products.create(req.body)
  .then((newuser) => {
    res.statusCode = 201;
    res.send(newuser);
  })
  .catch(next);
})

module.exports = router;