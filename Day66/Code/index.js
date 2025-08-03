// // Food Delivery Simulation

// function oderFood() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let chance = Math.random() < 0.7
//             if(chance) res();
//             else rej();
//         }, 2000);
//     });
// }

// oderFood()
// .then(function () {
//     console.log("🍕 Pizza Delivered!");
// })
// .catch(function(){
//     console.log("❌ Delivery failed!");
// })





// // Chained Promises : User -> Posts -> Comments

// function getUser(){
//     return new Promise((res, rej)=>{
//         setTimeout(function(){
//             res({id:1, name: "John"});
//         },1000);
//     });
// }

// function getPosts(userId){
//     return new Promise((res,rej)=>{
//         setTimeout(function(){
//             res(["title 1, title 2"]);
//         },1000);
//     })
// }

// function getComments(cmt){
//     return new Promise((res,rej)=>{
//         setTimeout(function(){
//             res(["you are amazing, love this post, you cooked"]);
//         },1000);
//     })
// }


// getUser()
//     .then(function(data){
//         console.log(data);
//         return getPosts(data.id)
//     })
//     .then(function(titles){
//         console.log(titles)
//         return getComments("");
//     })
//     .then(function(cmt){
//         console.log(cmt)
//     })
//     .finally(function(){
//         console.log("all data fetched")
//     });





function fakeApiCall(endpoint) {
    const data = {

        users: ["john", "ema", "amy"],
        posts: ["let's do it", "Make more impact", "Building things"]
    }

    let delay = Math.random()*2000+1000;
    return new Promise(function(res,rej){
        setTimeout(function(){
            res(data[endpoint])
        }, delay)
    });


}

fakeApiCall("users").then(function(data){
    console.log(data);
});

fakeApiCall("posts").then(function(data){
    console.log(data);
});