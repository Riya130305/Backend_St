const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, () => {
    console.log("Backend is running at 8080");
})

// to view i need to setup the templete
app.set("view engine", "ejs");

// bu default viwe path is process.cwd + ./views
app.set("views", path.join(__dirname, '/views'));

// render the dynamic content in the browser
// root route
app.get('/', (req, res) => {
    res.render('index');
})


appget('/random',(res,req)=>{
    let number = Math.floor(Math.random()*100);
    res.render('random',number);
})










