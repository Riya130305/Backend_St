
const express = require('express');
const path = require('path');
const app = express();

app.listen(8080 , ()=>{
    console.log("8080 port per backend hai");
})
// set the ejs templete
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// to use the static files in the code
app.use(express.static(path.join(__dirname,'public')));

// get the route
app.get('/', (req,res,next)=>{
    console.log('/ route');
    res.render('index');
})








