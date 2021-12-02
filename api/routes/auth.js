const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require('../models/User')
var cors = require("cors");

router.use(cors());

//preguntar si es admin

router.post("/login", passport.authenticate("local"), function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  req.user.id ? res.send(req.user) : res.sendStatus(401);
});

/* 
router.get("/login",function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  console.log(req.body);
  res.send(req.body)
});
 */

router.post("/register", (req, res, next) => {
  const { email } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (user) {
      res.status(400).send("ya hay un usuario con ese email");
    } else {
      User.create(req.body)
        .then((user) => {
          res.statusCode = 201;
          res.send(user);
        })
        .catch(next);
    }
  });
});
router.get("/logout", (req, res) => {
  res.sendStatus(req.logout()).send(200);

});

/* LOGIN */

module.exports = router;
