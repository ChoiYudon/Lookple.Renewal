const $btnHam = document.querySelector('.ham');
const $gnb = document.querySelector('.gnb');
$btnHam.addEventListener('click', () => {
  $gnb.classList.toggle('on');
});

let swiper = new Swiper('.slide1', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  pagination: {
    el: '.pg1',
  },
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
// swiper2
let swiper2 = new Swiper('.slide2', {
  slidesPerView: 2,
  spaceBetween: 30,
  grid: {
    rows: 1,
  },
  loop: true,
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
  pagination: {
    el: '.pg2',
    clickable: true,
  },

  breakpoints: {
    1000: {
      grid: {
        rows: 2,
      },

      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
// swiper3
let swiper3 = new Swiper('.slide3', {
  slidesPerView: 10,
  grid: {
    rows: 1,
  },
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next3',
    prevEl: '.prev3',
  },
  spaceBetween: 20,
  pagination: {
    el: '.pg3',
    clickable: true,
  },
});
