const express = require("express");
const router = express.Router();
const ProductsController = require ("../controllers/products")
var cors = require("cors");
router.use(cors());


router.get("/", ProductsController.allProducts) 
router.get("/categories", ProductsController.categories)
router.get("/location", ProductsController.locations)
router.get("/category/:category", ProductsController.getCategories)
router.get("/location/:location", ProductsController.getLocations)
router.get("/:id", ProductsController.singleProduct)

module.exports = router;
