console.log("Assignment - 21");

let num = Number(prompt("Enter a number : "));

count = 0;

for(i=1;i<=num;i++){
    if (i%2===0) {
        count++;
    }
}

console.log(`${num} has ${count} Even Numbers`);