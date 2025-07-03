console.log("Assignment - 6");

num1 = Number(prompt("Enter your first number : "));
num2 = Number(prompt("Enter your second number : "));

operation = prompt("Which operation you want to perform +,-,*,/ :");

if(operation==="+"){
    console.log(num1 + num2);
}else if(operation==="-"){
    console.log(num1 - num2);
}else if(operation==="*"){
    console.log(num1 * num2);
}else if(operation==="/"){
    console.log(num1 / num2);
}else(
    console.log("Invaild Operator")
)