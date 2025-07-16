// let CSK = document.querySelector('#card1');
// let DC = document.querySelector('#card2');
// let GT = document.querySelector('#card3');
// let KKR = document.querySelector('#card4');
// let LSG = document.querySelector('#card5');
// let MI = document.querySelector('#card6');
// let PBKS = document.querySelector('#card7');
// let RCB = document.querySelector('#card8');
// let RR = document.querySelector('#card9');
// let SRH = document.querySelector('#card10');



// console.log(winner)

let arr = [
    {
        title: 'IPL 2K25 Winner',
        team: 'CSK',
        trophy: `${"assets/winner.webp"}`
    },
    {
        title: 'IPL 2K25 Winner',
        team: 'DC',
        trophy: `${"assets/winner.webp"}`
    },
    {
        title: 'IPL 2K25 Winner',
        team: 'GT',
        trophy: `${"assets/winner.webp"}`
    },
    {
        title: 'IPL 2K25 Winner',
        team: 'KKR',
        trophy: `${"assets/winner.webp"}`
    },
    {
        title: 'IPL 2K25 Winner',
        team: 'LSG',
        trophy: `${"assets/winner.webp"}`
    },
    {
        title: 'IPL 2K25 Winner',
        team: 'MI',
        trophy: `${"assets/winner.webp"}`
    },
    {
        title: 'IPL 2K25 Winner',
        team: 'PBKS',
        trophy: `${"assets/winner.webp"}`
    },
    {
        title: 'IPL 2K25 Winner',
        team: 'RCB',
        trophy: `${"assets/winner.webp"}`
    },
    {
        title: 'IPL 2K25 Winner',
        team: 'RR',
        trophy: `${"assets/winner.webp"}`
    },
    {
        title: 'IPL 2K25 Winner',
        team: 'SRH',
        trophy: `${"assets/winner.webp"}`
    },

]

let btn = document.querySelector('button');
let h1 = document.querySelector('#heading h1');
let h2 = document.querySelector('#heading h2');


btn.addEventListener('click', function () {
    let num = Math.floor(Math.random() * arr.length);
    let winner = arr[num]
    // console.log(arr[num]);
    let card = document.querySelector(`#card${num + 1} img`)
    h1.innerHTML = winner.title;
    h2.innerHTML = winner.team;
    card.src = winner.trophy;
    let car = document.querySelector(`#card${num + 1}`)
    car.style.border = '3px solid gold'

})
