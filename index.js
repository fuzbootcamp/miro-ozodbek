let nav =document.querySelector('.nav')
nav.onclick =function() {
    nav.style.backgroundColor = "rgb(0, 238, 255)"
}

let header = document.querySelector('.header')
header.onclick =function() {
    header.style.backgroundColor = "rgb(0, 238, 255)"
}

let section = document.querySelector('.section')
section.onclick =function() {
    section.style.backgroundColor = "rgb(0, 238, 255)"
}

let aside = document.querySelector('.aside')
aside.onclick =function() {
    aside.style.backgroundColor = "rgb(0, 238, 255)"
}

let twink = document.querySelector('.twink')
twink.onclick =function() {
    twink.style.backgroundColor = "rgb(0, 238, 255)"
}

let footer = document.querySelector('.footer')
footer.onclick =function() {
    footer.style.backgroundColor = "rgb(0, 238, 255)"
}

let body = document.body;

function dark()  {
    body.classList.toggle('mode')
}


