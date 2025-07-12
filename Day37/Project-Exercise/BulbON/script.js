

let bulb = document.getElementById("bulb")
let btn = document.querySelector("button")

let isTrue = 0;

btn.addEventListener('click', () => {
    if (isTrue == 0) {
        bulb.src = "assets/image/pic_bulbon.gif";
        btn.innerText = "Turn OFF"
        isTrue = 1;
        btn.style.backgroundColor = 'red'

    }
    else {
        bulb.src = "assets/image/image.png";
        btn.innerText = "Turn ON"
        isTrue = 0;
        btn.style.backgroundColor = 'green'
    }
});
