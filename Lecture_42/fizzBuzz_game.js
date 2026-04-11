// Approch number 1 not optimize as moduls operator is very hevay

// function fizzBuzz(n){
// for(let i=1;i<=n;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i+" "+" is a FizzBuzz number");
//     }
//     else if(i%3==0){
//         console.log(i+" "+" is a Fizz number");
//     }
//     else if(i%5==0){
//         console.log(i+" "+" is a Buzz number");
//     }
//     else{
//         console.log(i);
//     }
// }
// }

// fizzBuzz(20);

// Approch number 2 --> partially optiminze

// function fizzBuzz2(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         if(i%3===0){
//             str+="fizz";
//         }
//         if(i%5===0){
//             str+="buzz";
//         }
//         else if(str===""){
//             str=i;
//         }
//         console.log(str);
//     }
// }

// fizzBuzz2(20);

// Approch number 3 optimize

function fizzBuzz3(n){
    let c3=0;
    let c5=0;
    for(let i=1;i<=n;i++){
        c3++;
        c5++;
        let str="";
        if(c3===3){
            str+="fizz";
            c3=0;
        }
        if(c5===5){
            str+="Buzz";
            c5=0;
        }
        else if(str===""){
            str=i;
        }
        
        console.log(str);
    }
}
fizzBuzz3(20);





    