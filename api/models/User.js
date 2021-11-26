const S = require("sequelize");
const db = require("../db/db");
const bcrypt = require("bcrypt");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate:{
        isAlpha: true,
      }
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate:{
        isEmail: true,
        
      }
    },
    password: {
      type: S.STRING,
    },
    admin:{
      type: S.BOOLEAN,
      default: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return bcrypt.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;