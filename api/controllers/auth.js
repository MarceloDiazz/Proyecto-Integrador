class AuthController {
  static async userLoged(req, res) {
    res.json(req.user);
  }

  static async userLogout(req, res) {
    req.logout();
    res.sendStatus(200);
  }
}

module.exports = AuthController;
