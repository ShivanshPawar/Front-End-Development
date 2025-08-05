// fetch api from github api 



// function getUserInfo() {
//     return new Promise(function (res, rej) {
//         setTimeout(function () {
//             res({ id: 1, name: "Harsh" });
//         }, 1000)
//     })
// }

// function getUserPics(id) {
//     return new Promise(function (res, rej) {
//         setTimeout(function () {

//             res(["pic 1", "pic 2"]);
//         }, 1000)
//     })
// }



// getUserInfo()
//     .then(function (data) {
//         console.log(data);
//         return getUserPics(data.id);

//     })
//     .then(function (data) {
//         console.log(data)
//     })


// fetch("https://api.github.com/users/ShivanshPawar").then(
//     function (data){
//         console.log(data);
//     }
// );

// fetch("https://api.github.com/users/ShivanshPawar")
// .then((res)=>{
//     return res.json()
// });


// fetch("https://api.github.com/users/ShivanshPawar")
// .then(res => res.json())
// .then(data=>{
//     console.log(data.login)
// })

// fetch("https://api.github.com/users/ShivanshPawar")
// .then(res => res.json())
// .then(data=>{
//     console.log(data.avatar_url)
// })


function getUserProfileData(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw) => raw.json());
}

getUserProfileData("ShivanshPawar").then(function(data){
    console.log(data.login);
})