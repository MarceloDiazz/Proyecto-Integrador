const express = require("express");
const router = express.Router();
const auth= require('./auth')
const products= require('./products')


// /api/


router.use('/products', products) 


//SERIA USERS
router.use('/auth', auth)


router.get('/',(req, res)=>{
    res.send("ANDA")
})

module.exports= router;