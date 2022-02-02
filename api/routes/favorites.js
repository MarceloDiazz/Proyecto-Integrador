const express = require("express");
const router = express.Router();
require("../models/asociations");
var cors = require("cors");
const FavoriteController = require("../controllers/favorites");
const Favorites = require("../models/Favorites");
router.use(cors());

router.get("/:userId", FavoriteController.favorites);
router.get("/", FavoriteController.allFavorites);
router.delete("/delete/:name", FavoriteController.deleteFavorite);

router.post("/", (req, res, next) => {
    const { name } = req.body;
    Favorites.findOne({ where: { name } }).then((user) => {
      if (user) {
        res.status(400).send("ya hay un producto agregado a favoritos");
      } else {
        Favorites.create(req.body)
          .then((user) => {
            res.statusCode = 201;
            res.send(user);
          })
          .catch(next);
      }
    });
  });

module.exports = router;
