let btn = document.querySelector('#btn');
let flw = document.querySelector('#followers')
let isFollow = false;
btn.addEventListener('click', function () {
    if (isFollow == false) {
        flw.textContent = '1';
        btn.textContent = 'following'
        btn.style.backgroundColor = 'gray'
        isFollow = true;
    } else {
        flw.textContent = '0';
        btn.textContent = 'follow'
        btn.style.backgroundColor = 'rgb(0, 136, 255)'
        isFollow = false;
    }
});