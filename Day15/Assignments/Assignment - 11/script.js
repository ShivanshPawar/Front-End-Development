console.log("Assignment - 11");

let marks = Number(prompt("Enter your marks : "));


if (marks >= 90 && marks <= 100) {
    console.log("You Got A Grade");
} else if (marks >= 80 && marks <= 89) {
    console.log("You Got B Grade");
} else if (marks >= 70 && marks <= 79) {
    console.log("You Got C Grade");
} else if (marks >= 60 && marks <= 69) {
    console.log("You Got D Grade");
} else if (marks < 60) {
    console.log("Fail");
}else{
    console.log("Enter marks between 0 to 100")
}

