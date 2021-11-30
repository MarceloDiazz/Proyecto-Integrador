const checkAuth = (req, res, next) => req.isAuthenticated() ? next() : res.status(401).send("unauthorized");
const checkAuthAdmin = (req, res, next) => req.isAuthenticated() && req.user.admin === true? next() : res.status(401).send("unauthorized");

module.exports = {checkAuth, checkAuthAdmin}