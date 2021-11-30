const express = require("express");
const router = express.Router();
var cors = require("cors");
const Products= require("../models/Products")
router.use(cors());


// /api/products
//ACA HACER LO DE LAS CATEGORIAS
//encontrar todos los products
router.get("/", (req, res, next) => {
  Products.findAll({where: {avalible: true}})
    .then((data) => res.send(data))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Products.create(req.body)
  .then((product) => {
    res.statusCode = 201;
    res.send(product);
  })
  .catch(next);
})

//Buscar por nombre
router.get("/category/:category", (req, res, next) => {
  let name = req.params.category;
  Products.findAll({where: {name: name}})
    .then((data) => res.send(data))
    .catch(next);
});


//Buscar por location
router.get("/location/:location", (req, res, next) => {
  let location = req.params.location;
  Products.findAll({where:{location: location}})
    .then((data) => res.send(data))
    .catch(next);
});


module.exports = router;