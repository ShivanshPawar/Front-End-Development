function getUserProfileData(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw) => raw.json());
}

getUserProfileData("ShivanshPawar").then(function(data){
    console.log(data)
})