
const express= require('express');
const app= express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Creating the dummy data
const comment=[
    {
        id:0,
        name:'Riya',
        comment:'This is a comment'
    },
    {
        id:1,
        name:'Riz',
        comment:'Heyy this is a comment'
    },
    {
        id:2,
        name:'Robin',
        comment:'comment'
    }
]

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
});

app.get('/',(req,res)=>{
    res.send('Hello RestFull API');
})

app.get('/blogs',(req,res)=>{
    res.render('index',{comments: comment});
   // console.log(err);
})

// Show the new form o add the new blog
app.get('/blogs/new',(req,res)=>{
    res.render('newForm');
})

// Post request to add the new blog
app.post('/blogs',(req,res)=>{
    const {name, comment: commentText }= req.body;
    comment.push({name, comment: commentText, id: comment.length});
    res.redirect('/blogs'); //to redirect to the blogs page after adding the new blog (get request) and use / 
});








