const express = require('express');
const route = express.Router();
const Product = require('../model/Product');
const Review = require('../model/Review');

//  route to show the form for adding a review
route.get('/products/:id/reviews/new', async(req,res)=>{
    const {id}= req.params;
    const foundProduct= await Product.findById(id);
    res.render('Review/new',{foundProduct});
});

//route to actually save respose to the backend
route.post('/products/:id/reviews',async(req,res)=>{
    const {rating,comment}= req.body;
    await Review.create({rating, comment});
    res.redirect(`/products/${id}`);
}) ;
module.exports= route;