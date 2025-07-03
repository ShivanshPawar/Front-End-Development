console.log("Assignment - 1");

let age = Number(prompt("Enter your age : "));

if (age <= 0) {
    console.log("You entered invaild Age.")
} else {
    if (age > 60) {
        console.log("You are a senior citizen.")
    } else if (age >= 18 && age <= 60) {
        console.log("You are an adult.")
    } else {
        console.log("You are a minor.");
    }
}