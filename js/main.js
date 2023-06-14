'use strict'

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
}


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

// Form
// inputmask
const form = document.querySelector('.form')
const telSelector = form.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(telSelector)

const validation = new JustValidate('.form')

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Корректная длина имени от 2 до 30 букв'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Корректная длина имени от 2 до 30 букв'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя'
    }
  ])
  .addField('.input-surname', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Корректная длина фамилии от 2 до 30 букв'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Корректная длина фамилии от 2 до 30 букв'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите Фамилию',
    },
  ])
  .addField('.input-email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите Email',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите номер телефона',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный номер',
    },
  ])
  .addField('.input-check', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Поставьте галочку',
    },
  ]).onSuccess((event) => {

    let formData = new FormData(event.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });