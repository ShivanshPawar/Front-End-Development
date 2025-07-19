let btn = document.querySelector('button');
let prog = document.querySelector('#grow');
let percent = document.querySelector('#percent');

let grow = 0;

btn.addEventListener('click', function () {
    let int = setInterval(function () {
        grow++;
        percent.innerHTML = grow + '%';
        prog.style.width = grow + '%';
    }, 50);

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
        btn.disabled = true;
    }, 5000);
});