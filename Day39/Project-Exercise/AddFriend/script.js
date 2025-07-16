let btn = document.querySelector('button')
let h3 = document.querySelector('h3')

let flag = 0;
btn.addEventListener('click', function () {
    if (flag == 0) {
        h3.textContent = 'Requesting...';
        h3.style.color = '#ae0418ff';
        setTimeout(() => {
            h3.innerHTML = 'Friends';
            h3.style.color = '#0bff30ff';
            btn.innerHTML = 'Remove Friend';
        }, 3000);
        flag = 1;
    } else {
        h3.innerHTML = 'Stranger';
        h3.style.color = 'red';
        btn.innerHTML = 'Add Friend';
        flag = 0;
    }
});