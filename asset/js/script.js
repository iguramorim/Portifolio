const abrir = document.querySelector('.abrir')
const navBar = document.querySelector('.menu-mobile')

abrir.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})

document.addEventListener('scroll', () =>{
    let header = document.querySelector('.header')
    header.classList.toggle('rolagem', scrollY > 10)
})