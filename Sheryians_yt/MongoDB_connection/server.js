// starting the server

const app = require('./src/app');
const connectDb= require('./src/db/db');

app.listen(8080,()=>{
    console.log("Sever connected to 8080");
})

connectDb();




