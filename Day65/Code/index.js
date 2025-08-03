// console.log(1)
// console.log(2)
// setTimeout(function () {
//     console.log(3)
// }, 1000)
// console.log(4)
// setTimeout(function () {
//     console.log(5)
// }, 500)
// console.log(6)




// callback hell
// function stepOne(cb) {
//     console.log("Step One");
//     cb()
// }
// function stepTwo(cb) {
//     console.log("Step Two");
//     cb()
// }
// function stepThree(cb) {
//     console.log("Step Three");
//     cb()
// }

// stepOne(() => {
//     stepTwo(() => {
//         stepThree(() => {
//             console.log("All Step Completed")
//         })
//     })
// })



// promises
// const pr = new Promise(function(res,rej){
//     console.log("get data from instagram")
//     console.log("collecting data")
//     console.log("data collected without any error")
//     console.log("instagram data")
//     res();
// });

// pr.then(function(){
//     console.log("resolved");
// }).catch(function(){
//     console.log("rejected");
// })


function stepOne(){
    return new Promise(function(res,rej){
        console.log("Step One");
        res();
    });
}
function stepTwo(){
    return new Promise(function(res,rej){
        console.log("Step Two");
        res();
    });
}
function stepThree(){
    return new Promise(function(res,rej){
        console.log("Step Three");
        res();
    });
}

stepOne()
    .then(stepTwo)
    .then(stepThree)
    .then(function(){
        console.log("all steps done");
    });