let searchForm=document.querySelector('.search-form');
document.querySelector('#search-cart').onclick =() =>{
    searchForm.classList.toggle('active');
    bagcheck.classList.remove('active');
    loginp.classList.remove('active');
    navbar.classList.remove('activr');
}
let bagcheck=document.querySelector('.shopping-cart');
document.querySelector('#bagCheck-cart').onclick =() =>{
    bagcheck.classList.toggle('active');
    searchForm.classList.remove('active');
    loginp.classList.remove('active');
    navbar.classList.remove('activr');
}
let loginp=document.querySelector('.logIn');
document.querySelector('#person-check').onclick =() =>{
    loginp.classList.toggle('active');
    searchForm.classList.remove('active');
    bagcheck.classList.remove('active');
    navbar.classList.remove('activr');
}
let navbar=document.querySelector('.navbar');
document.querySelector('#list-cart').onclick =() =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    bagcheck.classList.remove('active');
    loginp.classList.remove('active');
}

window.onscroll=()=>{
    searchForm.classList.remove('active');
    bagcheck.classList.remove('active');
    loginp.classList.remove('active');
    navbar.classList.remove('activr');
}

var swiper = new Swiper(".wrapperSlide", {
  loop:true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });