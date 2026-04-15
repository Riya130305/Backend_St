// connecting the server with the db

const mongoose = require('mongoose');

// actual connection

async function connectDb(){
    try {
        await mongoose.connect('mongodb+srv://DB_13:bV0et1EJcnCdIfvc@cluster0.z6pwmoe.mongodb.net/riya');
        console.log("Connected to the DB");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1); // Exit on failure
    }
}
module.exports = connectDb;