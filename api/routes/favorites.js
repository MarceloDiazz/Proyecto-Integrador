const express = require("express");
const router = express.Router();
require("../models/asociations");
var cors = require("cors");
const FavoriteController = require("../controllers/favorites");
router.use(cors());


router.get("/:userId", FavoriteController.favorites)
router.post("/", FavoriteController.addFavorites)




module.exports = router