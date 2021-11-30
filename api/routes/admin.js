const express = require("express");
const router = express.Router();
const Products = require("../models/Products")
var cors = require("cors");

router.use(cors());

//verificar si es admin antes de entrar
/* router.get("/", (req, res) => {
    User.findOne(req.user)
    .then((user) => {if(user.admin === false){
        res.send("tu no eres admin")
    }else{
        res.send("hola admin")
    }
})
  }); */


//Admin va a poder eliminar, editar todo
router.delete('/delete/:id', (req, res) => {
    let id= req.params.id;
    Products.destroy({where:{
        id:id
    }})
    .then(() => {res.sendStatus(201)})
})



router.post("/products", (req, res, next) => {
    Products.create(req.body)
    .then((product) => {
      res.statusCode = 201;
      res.send(product);
    })
    .catch(next);
  })

  router.put("/products/update/:id",(req,res)=>   {
    Products.update(req.body,   {where: {
    id:req.params.id
    },returning:true})
    .then((data)=>  {res.status(201).send(data[1][0])})
    
    })


//tengo que hacer un put, delete 

module.exports = router;
