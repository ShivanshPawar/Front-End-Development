let prompt = require("prompt-sync")({ sigint: true });

// Map in array

let arr = [1, 2, 3, 4];


arr.forEach(function (value) {
    console.log(value); // 1,2,3,4     !forEach always prints the value not returns
})



let ans = arr.map(function (value) {
    return 12;      //[12,12,12,12]
})
console.log(ans);




let ans1 = arr.filter(function (value) {
    // return true;     //[1,2,3,4]
    // return value>2      //[3,4]
    return value === 3;     //[3]
})
console.log(ans1);

let ans2 = arr.reduce(function (accumulater, key) {
    // return accumulater + key;       //returns Math operations in accumulater or key and reduce value store in accumulater
    return accumulater * key;
}, 1)

console.log(ans2);



// solving the questions



let i = 10; 
while(i>=1){
    console.log(i);
    i--;
}


let j = 3;
while(j<=30){
    console.log(j);
    j+=3;
}


let sum = 0;
for(let i = 0;i<=100;i++){
    sum += i;
}
console.log(sum);


let str = "JavaScript"

for(let i of str){
    console.log(i);
}


   
let arr1 = [1,1,1,1,2,2,2,3,4,5,5,5,5,5,6,6,6,5,5,5,4,4,4,3,3,3];
let ans3 = [...new Set(arr1)];

console.log(ans3);