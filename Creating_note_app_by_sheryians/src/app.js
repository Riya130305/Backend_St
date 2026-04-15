// Server create krne ke liye use hota haii

const express =  require('express');
const app = express();

// Creating the array of notes 
const notes=[];

// Creating the middleware to use the send json from the frontend
app.use(express.json());

// Post method
app.post('/notes',(req,res)=>{
    // console.log(req.body);
    notes.push(req.body);
    // Status
    res.status(201).json({
        "message":"Notes add successfully"
    })
})

// Get method
app.get('/notes',(req,res)=>{
    // status
    res.status(200).json({
        "messgae":"Get the note data successfully",
        "notes":notes
    })
})

// Delete method
// :index [:--> colon is uesd to tell that this is the param]
app.delete('/notes/:index',(req,res)=>{
    const index= req.params.index;
    if(index > notes.length){
        res.status(404).json({
            "message":"Given index is invalide"
        })
        return
    }
    delete notes[index];

    res.status(200).json({
        "message":"Deleted the note successfully",
        "notes":notes
    })
    // console.log(index);
})

// patch method
app.patch('/notes/:index',(req,res)=>{
    const index= req.params.index;
    discripton= req.body.discripton;
    notes[index].discripton=discripton;

    res.status(200).json({
        "message":"Update the discripton"
    })

})






module.exports=app;








