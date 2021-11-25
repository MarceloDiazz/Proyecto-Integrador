const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User")
const Products = require("../models/Products")
require("../models/asociations")

var cors = require("cors");

router.use(cors());




function isLogIn(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).send("Usuario no autorizado");
    }
  }
  
  router.get("/register", (req, res, next) => {
    User.findAll({
      include:[{
        model: Products,
        as: 'favorites',
        attributes: ['name', 'location', 'image', 'price']
      },{
        model: Products,
        as: 'products'
      }]
    })
      .then((data) => res.send(data))
      .catch(next);
  });
  
  router.post("/register", (req, res, next) => {
    const { email } = req.body;
    User.findOne({ where: { email } }).then((user) => {
      if (user) {
        res.status(400).send("ya hay un usuario con ese email");
      } else {
        User.create(req.body)
          .then((newuser) => {
            res.statusCode = 201;
            res.send(newuser);
          })
          .catch(next);
      }
    });
  });
  
  router.post("/login", passport.authenticate("local"), function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.send("Bienvenido");
  });
  
  router.get("/login", isLogIn, (req, res) => {
    if (req.user) {
      res.send("ENTRASTE PA");
    } else {
      res.status(401).send("Usuario no autorizado");
    }
  });
  
  router.post("/logout", (req, res) => {
    res.send(req.logout());
  });
  
  // Don´t modify this route, keep it at the bottom.
  router.use("/", function (req, res) {
    res.sendStatus(404);
  });
  
  /* LOGIN */
  
  module.exports = router;