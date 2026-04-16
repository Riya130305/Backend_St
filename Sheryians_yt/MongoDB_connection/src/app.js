// express setup krne 

const express= require('express');
const app = express();

// to get the data in the json form
app.use(express.json());

const noteModel=require('./model_toCreateSchema/notes.model')

// Creating the api calls for the different- different method and save that data to the database.

// POST request
app.post('/notes',async(req,res)=>{
    try{
    const data=req.body;
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(200).json({
        "message":"Add the data to the sever"
    })
    } catch(error){
        res.status(500).json({
            "error":error.message
        })
    }
})
// get request
app.get('/notes',async(req,res)=>{
    try {
        const data= await noteModel.find();
        res.status(200).json({
            "message":"All the data",
            "data":data
        })
    } catch (error) {
        res.status(500).json({
            "error":error.message
        })
    }
})
// delete request
app.delete('/notes/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await noteModel.findByIdAndDelete(id);
        res.status(200).json({
            "message":"Data deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            "error":error.message
        })
    }
})
// patch
app.patch('/notes/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=req.body;
        await noteModel.findByIdAndUpdate(id,data);
        res.status(200).json({
            "message":"Data updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            "error":error.message
        })
    }
})

module.exports=app;







