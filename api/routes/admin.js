const express = require("express");
const router = express.Router();
const User = require("../models/User")
var cors = require("cors");

router.use(cors());



module.exports = router;