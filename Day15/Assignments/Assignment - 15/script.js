console.log("Assignment - 15");

let num = Number(prompt("Enter a number : "));

let revStr = 0;
let isNegative = num < 0;
num = Math.abs(num);

while(num>0){
    let digit = num % 10;
    revStr = revStr * 10 + digit;
    num = Math.floor(num/10); 
}


isNegative ? console.log(-revStr) : console.log(revStr);

