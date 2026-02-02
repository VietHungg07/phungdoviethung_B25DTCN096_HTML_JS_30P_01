let n = 50;
let sum = 0;

for ( let i = 1; i <= 50 ; i++){
    if( i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if( i % 3 == 0){
        console.log("Fizz");
    }else if( i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(`${i}`);
    }
}
for ( let i = 1; i <= 50 ; i++){
    if( i % 3 == 0){
        sum += i;    
    }
}
console.log(` Tổng các số chia hết cho 3 nhưng không chia hết cho 5 là: ${sum}`)