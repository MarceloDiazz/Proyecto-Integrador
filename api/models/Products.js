const S = require("sequelize");
const db = require("../db/db");



class Products extends S.Model {}

Products.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    description: {
      type: S.STRING,
      allowNull: false,
    
    },
    truncarDescripcion: {
        type: S.VIRTUAL,
        get: function() {
          return this.description ? `${this.description.slice(0, 23) }...`: '';
        }
      },
    price: {
      type: S.INTEGER,
      defaultValue: 0,
    },
    location: {
      type: S.STRING,
    },
    image:{
        type: S.STRING,
        allowNull: false
    },
    avalible: {
      type: S.BOOLEAN,
      defaultValue: false
    }
  },
  { sequelize: db, modelName: "products" }
);


module.exports = Products;