// menu mobile
let hamburguer = document.querySelector('.hamburguer')
let nav = document.querySelector('.menu')

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active')
    nav.classList.toggle('active')
})
// menu mobile


// rolagem
document.addEventListener('scroll', () =>{
    let header = document.querySelector('.navBar')
    header.classList.toggle('rolagem', scrollY > 10)
})
// rolagem