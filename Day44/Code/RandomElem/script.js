let btn = document.querySelector('button')
let main = document.querySelector('#main')

let arr = [
    `${"assets/Sticker-1.png"}`,
    `${"assets/Sticker-2.png"}`,
    `${"assets/Sticker-3.png"}`,
    `${"assets/Sticker-4.png"}`,
    `${"assets/Sticker-5.png"}`,
    `${"assets/Sticker-6.png"}`,
    `${"assets/Sticker-7.png"}`,
    `${"assets/Sticker-8.png"}`,
]

btn.addEventListener("click", function () {
    let rndImg = Math.floor(Math.random() * 8)
    console.log(rndImg);
    let x = Math.random() * 90
    let y = Math.random() * 90
    let rotate = Math.random() * 360

    let img = document.createElement('img')
    img.setAttribute('src', `${arr[rndImg]}`)
    img.style.height = '100px'
    img.style.position = 'absolute'
    img.style.left = x + '%'
    img.style.top = y + '%'
    img.style.rotate = rotate + 'deg'
    main.appendChild(img)

    let r = Number(Math.floor(Math.random() * 256));
    let g = Number(Math.floor(Math.random() * 256));
    let b = Number(Math.floor(Math.random() * 256));
    btn.style.backgroundColor = `rgb(${r},${g},${b})`;
})