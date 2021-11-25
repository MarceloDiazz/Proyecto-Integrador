
const Products = require("./Products")
const User = require("./User")

//Yo quiero que una persona pueda agregar la cant de productos a fav
// que el quiera



//FAVORITES
User.hasMany(Products, {as:'favorites', foreignKey:'userId'});
Products.belongsTo(User,{as:'user'});


//PRODUCTOS CREADOS DE UN USUARIO
User.hasMany(Products, {as:'products', foreignKey:'userProductsId'});
Products.belongsTo(User,{as:'userProducts'});
