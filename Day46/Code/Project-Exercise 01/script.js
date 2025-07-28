let arr = [
    {
        userImage: 'https://i.pinimg.com/736x/af/89/6b/af896b313be45b38a0e2d3e114c1bd26.jpg',
        userName: 'Iron-Man',
        userWepon: 'Suit',
        userMarried: 'yes'
    },
    {
        userImage: 'https://i.pinimg.com/736x/97/60/96/97609603659ca0136e5bde44080a7219.jpg',
        userName: 'Thor',
        userWepon: 'Hammer',
        userMarried: 'no'
    },
    {
        userImage: 'https://i.pinimg.com/736x/7c/bb/43/7cbb43d0ed018392da3dbacfbf63f5fb.jpg',
        userName: 'Captain-Ameriaca',
        userWepon: 'Shield',
        userMarried: 'no'
    },
    {
        userImage: 'https://i.pinimg.com/736x/5f/a7/3f/5fa73fc8bf6dd1a9a05dee35ed572007.jpg',
        userName: 'black-Widow',
        userWepon: 'Guns',
        userMarried: 'no'
    },
    {
        userImage: 'https://i.pinimg.com/736x/79/bd/e7/79bde7accb90058592532f464656c466.jpg',
        userName: 'Hulk',
        userWepon: 'Fists',
        userMarried: 'no'
    },
    {
        userImage: 'https://i.pinimg.com/736x/26/80/ba/2680bade639631ffd16b8cc5f411c65c.jpg',
        userName: 'hawkeye',
        userWepon: 'Bow',
        userMarried: 'yes'
    },
]

sum = ``;
arr.forEach(function (e) {
    sum += `<div>
        <img src="${e.userImage}" alt="">
        <h2>${e.userName}</h2>
        <h3>${e.userWepon}</h3>
        <p>married : ${e.userMarried}</p>
    </div>`
});

let body = document.querySelector('body');
body.innerHTML = sum;