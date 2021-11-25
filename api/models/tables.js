const Categories = require("./Categories")
const Products = require("./Products")
const User = require("./User")

//Yo quiero que una persona pueda agregar la cant de productos a fav
// que el quiera

//RELACION MUCHOS A MUCHOS
User.hasMany(Products, { as: 'favorites' });
Products.belongsTo(User, { as: 'prodId' });

//RELACION UNO A MUCHOS
