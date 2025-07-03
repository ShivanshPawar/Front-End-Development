console.log("Assignment - 5");

year = Number(prompt("Enter a year : "));

if((year%4===0 && year%100!==0) || year%400===0){
    console.log("It's a leap year");
}else{
    console.log("It's not a leap year");
}