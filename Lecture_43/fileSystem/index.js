


const fs = require('fs');

// console.log(fs);
// WRITE OPERATIION [CREATE]

let data = "mai write operation hu";

fs.writeFile('abc.txt',data,{
    encoding:'utf-8',
    flag:'w'
},(err)=>{
    if(err){throw err};
    console.log("write operation");
})
// Alternative of the above
fs.writeFileSync('abc.txt',data);

// READ OPERATION [READ]

// fs.readFile('abc.txt',{
//     encoding:'utf-8',// to avoid the buffer 
//     flag:'r'
// },(err,data)=>{
//     if(err){throw err};
//     console.log(data);
// })
// // Alternative of the above
// let data1=fs.readFileSync('abc.txt');
// console.log(data1.toString());//to avoid the buffring we to toString 

// UPDATE OPERATION

// fs.appendFile('abc.txt'," append kr diya data",
//     (err)=>{
//         if(err){throw err}
//         console.log("update successfully");
// })
// // Alternative of the above
// fs.appendFileSync('abc.txt'," append kr diya data");

// DELETE OPERATION

// fs.unlink('abc.txt',(err)=>{
//     if(err) throw err;
//     console.log("mene hata diya hai sara data");
// })

// Alternative of the above
// fs.unlinkSync('abc.txt');

// 









