
let btn = document.querySelector('button');
let clr = document.querySelector('span');
let code = document.querySelector('p');

btn.addEventListener('click', function () {
    let r = Number(Math.floor(Math.random() * 256));
    let g = Number(Math.floor(Math.random() * 256));
    let b = Number(Math.floor(Math.random() * 256));
    code.innerText = `rgb(${r},${g},${b})`;
    clr.style.color = `rgb(${r},${g},${b})`;
});