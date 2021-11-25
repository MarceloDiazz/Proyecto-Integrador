const S = require("sequelize");
const db = require("../db/db");


class Categories extends S.Model{}

Categories.init({
    name:{
        type: S.STRING,
    },
    location: {
        type: S.STRING
    }
},
{ sequelize: db, modelName: "categories" })


module.exports = Categories;