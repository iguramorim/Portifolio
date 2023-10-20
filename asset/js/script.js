const abrir = document.querySelector('.abrir')
const navBar = document.querySelector('.menu-mobile')

abrir.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})

document.addEventListener('scroll', () =>{
    let header = document.querySelector('.navBar')
    header.classList.toggle('rolagem', scrollY > 10)
})

const btnProduto = document.getElementById("btn-produto")
const dropdownMenu = document.getElementById("dropdown-menu")

btnProduto.addEventListener('click', ()=> {
    dropdownMenu.classList.toggle('active')
})


// Mobile dropdown
const btnProdutoMobile = document.getElementById("btn-produto-mobile")
const dropdownMenuMobile = document.getElementById("dropdown-menu-mobile")

btnProdutoMobile.addEventListener('click', ()=> {
    dropdownMenuMobile.classList.toggle('mobile')
})
// Mobile dropdown