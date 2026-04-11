
const pi=Math.PI;
const add =(a,b)=>a+b;
const subt =(a,b)=>a-b;
console.log(add);
console.log(subt);

// By default
// module.export={};

// To change the default behavior of send ing the empty object
// // object key-value pair
// module.exports={pi,add,subt}; //module.exports se hum add function ko export kar rahe hai taki dusre file me use kar sake

// // This and above both are same
// module.exports={
//     pi:pi,
//     ans1:ans1,
//     ans2:ans2
// }

//  inspite of object we can send any thing array, string , number and so on
module.exports="Heelooo";

