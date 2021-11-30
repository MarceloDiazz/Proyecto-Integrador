const express = require("express");
const router = express.Router();
var cors = require("cors");
const User= require("../models/User")
const Products = require("../models/Products");
require("../models/asociations");
router.use(cors());


  

router.get("/", (req, res, next) => {
    User.findAll({
      include: [
        {
          model: Products,
          as: "favorites",
          attributes: ["name", "location", "image", "price"],
        },
        {
          model: Products,
          as: "products",
        },
      ],
    })
      .then((data) => res.send(data))
      .catch(next);
  });


  router.delete('/delete/:id', (req, res) => {
    let id= req.params.id;
    User.destroy({where:{
        id:id
    }})
    .then(() => {res.sendStatus(201)})
})







module.exports= router
