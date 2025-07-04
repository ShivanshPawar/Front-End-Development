let arr  = [1,2,4,5,3,3,56,5,3,434,54,44,55,66,433,];

// uniqArr = [...new Set(arr)]
// sortedArr = uniqArr.sort(function(a,b){
//     return b-a;
// })

// console.log(sortedArr[1])



// console.log([...new Set(arr)].sort(function(a,b){
//     return b-a;
// })[1]);

// console.log([...new Set(arr)].sort((a,b)=> b-a)) //sort array in des order 


// let arr2 = [];

// for(let i = arr.length-1;i>=0;i--){
//     arr2.push(arr[i]);
// }

// console.log(arr2);



let arr3 = [1,2,3,4,2,5,3,4,2,7,6,8]

let obj = {};

arr3.forEach(function(val){
    obj[val] === undefined ? (obj[val]=1) : obj[val]++;
});

console.log(obj)