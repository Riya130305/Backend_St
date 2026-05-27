const mongoose = require('mongoose');
//Schema
const product= new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim: true
    } ,
    img:{
        type : String,
        trim: true
    },
    description:{
        type : String,
        trim: true
    }
});
// Model
 const products = mongoose.model('products', product);
// Export model
module.exports= products;