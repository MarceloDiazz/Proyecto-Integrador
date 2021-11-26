const express = require("express");
const router = express.Router();
const User = require("../models/User")
var cors = require("cors");

router.use(cors());

//Admin va a poder eliminar, editar todo

//tengo que hacer un put, delete 

module.exports = router;