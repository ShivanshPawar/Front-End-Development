console.log("Assignment - 4");

num1 = Number(prompt("Enter first number : "));
num2 = Number(prompt("Enter second number : "));
num3 = Number(prompt("Enter third number : "));

largestNumber = 0;

if(num1 > num2 && num1 > num3){
    largestNumber = num1;
}else if(num2 > num3){
    largestNumber = num2;
}else{
    largestNumber = num3;
}

console.log("The largest number is: " + largestNumber);