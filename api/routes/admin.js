const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");
var cors = require("cors");
router.use(cors());

//Admin va a poder eliminar, editar todo
router.delete("/delete/:id", AdminController.deleteProduct);
router.put("/products/update/:id", AdminController.editProduct);
router.post("/products", AdminController.createProduct);

module.exports = router;
