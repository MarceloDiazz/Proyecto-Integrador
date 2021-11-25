const Categories = require("./Categories")
const products = require("./Products")
const User = require("./User")

//Yo quiero que una persona pueda agregar la cant de productos a fav
// que el quiera

//RELACION MUCHOS A MUCHOS
/* User.belongsToMany(products, { through: 'favorites' });
products.belongsToMany(User, { through: 'fav' }); */

//RELACION UNO A MUCHOS
