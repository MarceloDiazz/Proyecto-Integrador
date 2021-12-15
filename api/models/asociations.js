
const Products = require("./Products")
const User = require("./User")

//Yo quiero que una persona pueda agregar la cant de productos a fav
// que el quiera

//PRODUCTOS CREADOS DE UN USUARIO: una propiedad solo tenga un creador
User.hasMany(Products, {as:'products', foreignKey:'userProductsId'});
Products.belongsTo(User,{as:'products'});


//FAVORITES: una propiedad tenga muchos usuarios favoritos
User.belongsToMany(Products, {as:"User", foreignKey:"UserId", through: "Favorites" });
Products.belongsToMany(User, {as:"Product", foreignKey:"ProductId", through: "Favorites" });



/* async favoritesUser(){
    try{
        const user= await User.findOne()
        const product= await Products.findOne({where: {  }})
    }
} */