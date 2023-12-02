// menu mobile
let hamburguer = document.querySelector(".hamburguer");
let nav = document.querySelector(".menu");
let fecharMenu = document.querySelector(".fechar-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  nav.classList.toggle("active");
  fecharMenu.classList.toggle("active");
});

fecharMenu.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  nav.classList.toggle("active");
  fecharMenu.classList.remove("active");
});
// menu mobile

// rolagem
document.addEventListener("scroll", () => {
  let header = document.querySelector(".navBar");
  header.classList.toggle("rolagem", scrollY > 10);
});
// rolagem

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
