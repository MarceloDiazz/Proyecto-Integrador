const AdminService = require("../services/admin")

class AdminController {
    static async deleteProduct(req, res) {
        const { error, data } = await AdminService.deleteProduct(req.params.id);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async editProduct(req, res) {
        const { error, data } = await AdminService.editProduct(req.params.id, req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async createProduct(req, res) {
        const { error, data } = await AdminService.createProduct(req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }
    
}

module.exports = AdminController;