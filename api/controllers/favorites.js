const Favorites = require("../models/Favorites");

class FavoriteController {
  static favorites(req, res, next) {
    Favorites.findAll({ where: { userId: req.params.userId } })
      .then((data) => res.send(data))
      .catch((error) => console.log(error));
  }

  
  static allFavorites(req, res, next) {
    Favorites.findAll()
      .then((favorites) => res.status(200).send(favorites))
      .catch((error) => console.log(error));
  }
  static deleteFavorite(req, res, next) {
    Favorites.destroy({ where: { name: req.params.name } })
      .then(() => res.sendStatus(200))
      .catch((error) => console.log(error));
  }
}

module.exports = FavoriteController;
