const Products = require("../models/Products");

class AdminService {
  static async deleteProduct(id) {
    try {
      const product = await Products.destroy({
        where: {
          id: id,
        },
      });
      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async editProduct(id, body) {
    try {
      const product = await Products.update(body, {
        where: {
          id: id,
        },
        returning: true,
      });
      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async createProduct(body) {
    try {
      const product = await Products.create(body);

      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = AdminService;
