const S = require("sequelize");
const db = require("../db/db");

class Favorites extends S.Model {}

Favorites.init(
  {
    userId: {
      type: S.INTEGER,
      allowNull: false,
    },
    name: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.STRING,
      allowNull: false,
    },
    image: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
