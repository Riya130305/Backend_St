const mongoose = require('mongoose');

// Creating the schema for the review
const reviewSchema = new mongoose.Schema ({
    rating:{
        type: Number,
        required:true
    },
    comment:{
        type:String,
        trim:true,
        required:true
    }
});
const Review= mongoose.model('Review', reviewSchema);
module.exports= Review;