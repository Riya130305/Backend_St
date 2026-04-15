// sever ko start krne ke liye

const app=require('./src/app');

app.listen(8080,()=>{
    console.log("server start on port 8080");
})


// app.get('/',(req,res)=>{
//     res.send("Hello");
// })





