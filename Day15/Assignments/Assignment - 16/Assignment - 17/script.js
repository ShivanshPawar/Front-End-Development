console.log("Assignment - 16");

let num = Number(prompt("Enter three digit number : "));

let sum = 0;

while(num>0){
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num/10); 
}

console.log(sum)