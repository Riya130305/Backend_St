

const express = require('express');
const app = express();

app.listen(8080,()=>{
   console.log("server is running at port 8080")
});


//This function alwany run when this passed path is passed to it 

// app.use('/user',(req,res,next)=>{
//     res.send("using the middleware function");
//     console.log("this function always runs utile specific path is not passed to it");
//     // next();
// })


app.use((req,res,next)=>{
    //res.send("using the middleware function");
    console.log("this function always runs utile specific path is not passed to it");
    next();
})

app.get('/profile',(req,res,next)=>{
    res.send("profile data"); //we can send string, object , buffer and JSON value
     next()  // IF REQUEST SEND KR DI HAI THEN NEXT NHI USE KRTE HAI
})

app.get('/progress',(req,res)=>{
    res.send("progress");
})








