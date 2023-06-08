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


// HEADER ANIMATE
window.onscroll = () => {
  const header = document.querySelector('.header');
  const logo = document.querySelector('.nav-list__logo');
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.header__nav');


  if (pageYOffset) {
    header.classList.add('header--light')
    logo.classList.add('nav-list__logo--light')
    menuBtn.classList.add('menu-btn--light')
    nav.classList.add('header__nav--light')

  } else {
    header.classList.remove('header--light')
    logo.classList.remove('nav-list__logo--light')
    menuBtn.classList.remove('menu-btn--light')
    nav.classList.remove('header__nav--light')
  }
}


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