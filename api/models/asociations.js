const Products = require("./Products");
const Favorites = require("./Favorites");
const User = require("./User");

//Yo quiero que una persona pueda agregar la cant de productos a fav
// que el quiera

//PRODUCTOS CREADOS DE UN USUARIO: una propiedad solo tenga un creador
User.hasMany(Products, { as: "products", foreignKey: "userProductsId" });
Products.belongsTo(User, { as: "products" });

//FAVORITES: una propiedad tenga muchos usuarios favoritos
/* User.belongsToMany(Products, {
  as: "User",
  foreignKey: "UserId",
  through: "Favorites",
});
*/

User.hasMany(Favorites, {
  as: "userId",
  foreignKey: "Favorites",
});
