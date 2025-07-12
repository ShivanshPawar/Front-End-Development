// DOM - learnings

let h1 = document.querySelector('h1');


h1.addEventListener('click', function () {
    h1.innerHTML = 'the beginning after the end';
    h1.style.color = 'red';
    h1.style.backgroundColor = 'black';
});