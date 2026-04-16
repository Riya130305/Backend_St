const mongoose =  require('mongoose');

// creating the schema
const noteSchema = new mongoose.Schema({
    // defing the structure of the schema
    title:String,
    description:String,
})

// To perfore the curd operation i need to use the model

const noteModel = mongoose.model("notes",noteSchema);

module.exports=noteModel