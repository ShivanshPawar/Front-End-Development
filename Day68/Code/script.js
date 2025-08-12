// function getUserProfileData(username){
//     return fetch(`https://api.github.com/users/${username}`).then((raw) => raw.json());
// }

// getUserProfileData("ShivanshPawar").then(function(data){
//     console.log(data)
// })


let searchBtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let card = document.querySelector(".card");



function getProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`).then(raw => {
        if (!raw.ok) throw Error("user not found.")
        return raw.json();
    })
}

function getRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw => {
        if (!raw.ok) throw Error("Failed to fetch repos...");
        return raw.json();
    })
}

function decorateUserData(details){
    console.log(details)
   let data = ` <img 
        src="${details.avatar_url}" 
        alt="GitHub Avatar" 
        class="w-28 h-28 rounded-full border border-[#30363d]"
      />
      <div class="flex-1">
        <h2 class="text-2xl text-white font-semibold">${details.login}</h2>
        <p class="text-[#8b949e]">${details.node_id}</p>
        <p class="mt-2 text-[#c9d1d9]">${details.bio}</p>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mt-4">
          <div>
            <span class="block font-bold text-white">${details.public_repos}</span>
            <span class="text-[#8b949e]">Public Repos</span>
          </div>
          <div>
            <span class="block font-bold text-white">${details.followers}</span>
            <span class="text-[#8b949e]">Followers</span>
          </div>
          <div>
            <span class="block font-bold text-white">${details.following}</span>
            <span class="text-[#8b949e]">Following</span>
          </div>
          <div>
            <span class="block font-bold text-white">${details.company}</span>
            <span class="text-[#8b949e]">Company</span>
          </div>
          <div>
            <span class="block font-bold text-white">${details.location}</span>
            <span class="text-[#8b949e]">Location</span>
          </div>
          <div>
            <a 
              href="${details.blog}" 
              target="_blank" 
              class="block font-bold text-[#58a6ff] underline"
            >
              github.blog
            </a>
            <span class="text-[#8b949e]">Website</span>
          </div>
        </div>
      </div>`

      card.innerHTML = data
}

// getProfileData("ShivanshPawar").then(function (data) {
//     // console.log(data) 
// })




searchBtn.addEventListener("click", function () {
    let username = usernameinp.value.trim();
    if(username.length>0){
        getProfileData(username).then((data) => {
            decorateUserData(data); 
        })
    }else{
        alert();
    }
})

