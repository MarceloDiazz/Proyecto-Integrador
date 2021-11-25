const express = require("express");
const router = express.Router();
var cors = require("cors");
const Products= require("../models/Products")
router.use(cors());


// /api/products
//ACA HACER LO DE LAS CATEGORIAS
//encontrar todos los products
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

//Buscar por nombre
router.get("/category/:name", (req, res, next) => {
  let name = req.params.name;
  Products.findAll({where: {name: name}})
    .then((data) => res.send(data))
    .catch(next);
});


//Buscar por location
router.get("/location/:name", (req, res, next) => {
  let location = req.params.name;
  Products.findAll({where:{location: location}})
    .then((data) => res.send(data))
    .catch(next);
});


module.exports = router;