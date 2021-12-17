const express = require("express");
const router = express.Router();
const passport = require("passport");
const AuthController= require("../controllers/auth")
const User = require('../models/User')
var cors = require("cors");

router.use(cors());

//preguntar si es admin

router.post("/login", passport.authenticate("local"), AuthController.userLoged)

router.post("/register", (req, res, next)=>{
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
})
;
router.get("/logout", AuthController.userLogout)



/* LOGIN */

module.exports = router;
