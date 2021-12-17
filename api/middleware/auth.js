const checkAuth = (req, res, next) =>
  req.isAuthenticated() ? next() : res.status(401).send("unauthorized");

const checkAuthAdmin = (req, res, next) => {
  console.log(req.user);
};

module.exports = { checkAuth, checkAuthAdmin };
