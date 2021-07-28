let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mbehind = document.getElementById('mbehind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mfront = document.getElementById('mfront')
let header = document.querySelector('header')
window.addEventListener('scroll',()=>
{
    let value = window.scrollY
    stars.style.left = value * 0.25 +'px'
    moon.style.top = value *1.25 + 'px'
    mbehind.style.top = value * 0.25 +'px'
    text.style.marginRight = value *4 + 'px'
    text.style.marginTop = value *1.5 + 'px'
    btn.style.marginTop = value *1.5 + 'px'
    mfront.style.top = value *0 + 'px'
    header.style.top = value *0.5 +'px'
})