let btn = document.querySelector('button')
let main = document.querySelector('#main')

btn.addEventListener("click",function(){
    let x = Math.random()*90
    let y = Math.random()*90
    let rotate = Math.random()*360

    let img = document.createElement('img')
    img.setAttribute('src','./Sticker-8.png')
    img.style.height = '100px'
    img.style.position = 'absolute'
    img.style.left = x+'%'
    img.style.top = y+'%'
    img.style.rotate = rotate+'deg'
    main.appendChild(img)
})