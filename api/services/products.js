const Products = require("../models/Products");

class ProductsController {
  static async allProducts() {
    try {
      const products = await Products.findAll();
      return { error: false, data: products };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async categories() {
    try {
      const categories = await Products.findAll({
        attributes: ["category"],
      });
      const resultado = [];
      for (let product of categories) {
        const { category } = product;
        if (!resultado.includes(category)) {
          resultado.push(category);
        }
      }
      return { error: false, data: resultado };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async locations() {
    try {
      const locations = await Products.findAll({
        attributes: ["location"],
      });
      const resultado = [];
      for (let product of locations) {
        const { location } = product;
        if (!resultado.includes(location)) {
          resultado.push(location);
        }
      }
      return { error: false, data: resultado };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async getCategories(category) {
    try {
      const categories = await Products.findAll({
        where: { category: category },
      });
      return { error: false, data: categories };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async getLocations(location) {
    try {
      const locations = await Products.findAll({
        where: { location: location },
      });
      return { error: false, data: locations };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async singleProduct(id) {
    try {
      const product = await Products.findOne({ where: { id: id } });
      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = ProductsController;
