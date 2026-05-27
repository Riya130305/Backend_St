const express = require('express');
const router= express.Router();
const Product =require('../model/Product');

//Get deview request
router.get('/product',async(req,res)=>{
    const products= await Product.find({});
    console.log('Products found');
    // showing when using the ejs file
    res.render('Product/ind',{products});
});

module.exports= router;