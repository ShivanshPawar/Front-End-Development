let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');

let btn = document.querySelector('button');

let isTrue = 0;

btn.addEventListener('click', function () {
    let img1src = img1.getAttribute('src')
    let img2src = img2.getAttribute('src')

    if (isTrue == 0) {
        btn.style.background = 'linear-gradient(45deg, #FFFF00 0%, #7FFF00 100%)'
        isTrue = 1;
    } else {
        btn.style.background = 'linear-gradient(45deg, #7FFF00 0%, #FFFF00 100%)'
        isTrue = 0;
    }

    img1.setAttribute('src', img2src)
    img2.setAttribute('src', img1src)
});