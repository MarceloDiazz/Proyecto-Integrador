const User = require("../models/User");
const Products = require("../models/Products");
require("../models/asociations");

class UserService {
  static async allUsers() {
    try {
      const users = await User.findAll({
        include: [
          {
            model: Products,
            as: "products",
            attributes: ["name", "location", "image", "price"],
          },
        ],
      });
      return { error: false, data: users };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async userId(id) {
    try {
      const users = await User.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: Products,
            as: "products",
            attributes: ["name", "location", "image", "description"],
          },
        ],
      });
      return { error: false, data: users };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async deleteUsers(id) {
    try {
      const users = await User.destroy({
        where: {
          id: id,
        },
      });
      return { error: false, data: users };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = UserService;
