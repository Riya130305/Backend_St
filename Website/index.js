const express= require('express');
const app=express();
const path=require('path');
const mongoose= require('mongoose');
const seedDB= require('./seed');
const ProductRoute = require('./route/product');
mongoose.connect("mongodb://127.0.0.1:27017/blogApp")
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.error('Error connecting to MongoDB', err);
});

// To convert the data into json format
app.use(express.json());

// Seed file runs only onces when we start the server and it will add the data to the database and the comment out this line after the first run to avoid adding the same data again and again to the database
//seedDB();

//*************Important As product har request per chlna chahiye to isliye humne product route ko use kiya hai
app.use(ProductRoute);

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
});