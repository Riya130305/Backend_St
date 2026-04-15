// connecting the server with the db

const mongoose = require('mongoose');

// actual connection

async function connectDb(){
    // wait for the connection
    await mongoose.connect('mongodb+srv://backend_13:6KSs1bc9SA2NkCDz@cluster0.z6pwmoe.mongodb.net/riya');
    console.log("Connected to the DB");
}

module.exports=connectDb;