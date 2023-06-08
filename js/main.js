                  // MENU
const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.nav-list__link');

const showMenu = () => {
  menu.classList.toggle('header__nav--active');
  menuBtn.classList.toggle('menu-btn--active');
};

menuBtn.addEventListener('click', showMenu);

for (let link of menuLinks) {
  link.addEventListener('click', showMenu)
};


                  // SLIDER
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 500,
  freeMode: true,
  followFinger: true,
  slidesPerView: 1,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});