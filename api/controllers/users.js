const UserService = require("../services/users");
require("../models/asociations");

class UserController {
  static async allUsers(req, res) {
    const { error, data } = await UserService.allUsers();

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async deleteUsers(req, res) {
    const { error, data } = await UserService.deleteUsers(req.params.id);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }
}

module.exports = UserController;
