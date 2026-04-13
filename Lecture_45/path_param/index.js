

const express=require('express');
const app=express();

app.listen(8080,()=>{
    console.log("Hey i am on 8080 port");
})

// app.use ki requirement tk hoti hai jb same km bar bar krna hota hai

// app.use((req,res,next)=>{
//     console.log("")
// })

// path parameter
app.get(('/r/:param'),(req,res)=>{
    let{ param }= req.params; // param humhari request ki body mai rehta hai
    console.log("Hey it is path");
    res.send(`My param is ${param}`);
})

// Query parameter
app.get('/search', (req, res) => {
    console.log(req.query);
    res.send("Done");
});










