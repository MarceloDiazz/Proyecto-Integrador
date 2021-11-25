const express = require("express");
const router = express.Router();
const auth= require('./auth')
const products= require('./products')
const admin= require('./admin')


// /api/

//PRODUCTS
router.use('/products', products) 


//USERS (passport, rol admin)
router.use('/auth', auth)
router.use('/admin', admin)

//PROBANDO RUTA
router.get('/',(req, res)=>{
    res.send("ANDA")
})

module.exports= router;