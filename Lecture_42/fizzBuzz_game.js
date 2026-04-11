// Approch number 1

function fizzBuzz(n){
for(let i=1;i<=n;i++){
    if(i%3==0 && i%5==0){
        console.log(i+" "+" is a FizzBuzz number");
    }
    else if(i%3==0){
        console.log(i+" "+" is a Fizz number");
    }
    else if(i%5==0){
        console.log(i+" "+" is a Buzz number");
    }
    else{
        console.log(i);
    }
}
}

fizzBuzz(20);

// Approch number 2




    