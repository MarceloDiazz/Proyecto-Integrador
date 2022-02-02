const express = require("express");
const router = express.Router();
var cors = require("cors");
const UserController = require("../controllers/users");
require("../models/asociations");

router.use(cors());

router.get("/", UserController.allUsers);
router.get("/:id", UserController.userId);
router.delete("/delete/:id", UserController.deleteUsers);

module.exports = router;
