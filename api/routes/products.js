const express = require("express");
const router = express.Router();
var cors = require("cors");
const Products = require("../models/Products");
router.use(cors());

// /api/products
//ACA HACER LO DE LAS CATEGORIAS
//encontrar todos los products
router.get("/", (req, res, next) => {
  Products.findAll({ where: { avalible: true } })
    .then((data) => res.send(data))
    .catch(next);
});

/* router.post("/", (req, res, next) => {
  Products.create(req.body)
  .then((product) => {
    res.statusCode = 201;
    res.send(product);
  })
  .catch(next);
})
 */
router.get("/categories", (req, res, next) => {
  Products.findAll({
    attributes: ["category"],
  })
    .then((products) => {
      const resultado = [];
      for (let product of products) {
        const {category}= product
        if (!resultado.includes(category)) {
          resultado.push(category);
        }
      }
      res.send(resultado)
    })
    .catch(next);
});


router.get("/location", (req, res, next) => {
  Products.findAll({
    attributes: ["location"],
  })
    .then((products) => {
      const resultado = [];
      for (let product of products) {
        const {location}= product
        if (!resultado.includes(location)) {
          resultado.push(location);
        }
      }
      res.send(resultado)
    })
    .catch(next);
});
//Buscar por nombre
router.get("/category/:category", (req, res, next) => {
  let category = req.params.category;
  Products.findAll({ where: { category: category } })
    .then((data) => res.send(data))
    .catch(next);
});

//Buscar por location
router.get("/location/:location", (req, res, next) => {
  let location = req.params.location;
  Products.findAll({ where: { location: location } })
    .then((data) => res.send(data))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  Products.findOne({ where: { id: id } })
    .then((data) => res.send(data))
    .catch(next);
});

module.exports = router;
