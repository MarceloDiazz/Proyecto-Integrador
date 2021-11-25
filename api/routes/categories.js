const express = require("express");
const router = express.Router();
var cors = require("cors");
const Categories= require("../models/Categories")
router.use(cors());


  router.get('/',(req, res)=>{
    res.send("Categories")
})


module.exports = router;
