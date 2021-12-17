const express = require("express");
const router = express.Router();
var cors = require("cors");
const UserController = require ("../controllers/users")

/* const User= require("../models/User")
const Products = require("../models/Products"); */
require("../models/asociations");
router.use(cors());




router.get("/", UserController.allUsers)
router.delete('/delete/:id', UserController.deleteUsers )
  








module.exports= router
