const express = require('express');
const router= express.Router();
const Product =require('../model/Product');

//Get device request
router.get('/products',async(req,res)=>{
    const products= await Product.find({});
    // showing when using the ejs file
    // render  mai hum path likhte hai
    res.render('Product/ind',{products});
});

// to show form for new product 
router.get('/products/new',(req,res)=>{
    res.render('Product/new');
})

//to actually add the product to the database
router.post(('/products'),async(req,res)=>{
    const {name,img,description}= req.body;
    await Product.create({name,img,description});
    res.redirect('/products');
})

// to show the details of the product
router.get('/products/:id',async(req,res)=>{
    const {id}=req.params;
    const foundProduct=await Product.findById(id);
    res.render('Product/show',{foundProduct});
})
// edit prodect form 
router.get('/products/:id/edit',async(req,res)=>{
    const {id}=req.params;
    const foundProduct=await Product.findById(id);
    res.render('Product/edit',{foundProduct});
});
// to actually update the product
router.patch('/products/:id',async(req,res)=>{
    const {id}=req.params;
    const {name,img,description}= req.body;
    await Product.findByIdAndUpdate(id,{name,img,description});
    res.redirect(`/products/${id}`);
});

// to delete the product
router.delete('/products/:id',async(req,res)=>{
    const {id}=req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
});

module.exports= router;