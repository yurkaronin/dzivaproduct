document.addEventListener("DOMContentLoaded", () => {
  let menuButton = document.querySelector("#js-menu-btn");
  // прилипающая шапка 
  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      document.body.classList.add('header-sticky');
    } else {
      document.body.classList.remove('header-sticky');
    }

  };

  // кнопка вызова мобильного меню 
  menuButton.addEventListener('click', function () {
    document.body.classList.toggle('mob-menu-open');
    // document.body.classList.toggle('custom-lock');
    // menuButton.classList.toggle('active');
    // mainMenu.classList.toggle('active');
    // searchButton.classList.remove('active');
    // headerSearch.classList.remove('active');
  });

  // слайдер в первом экране 
  const firstSwiper = new Swiper('.js-first-slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.js-first-slider .swiper-button-next'

    }

  });

});
// слайдер каталог 
const catalogSlider = new Swiper('.js-catalog-slider', {
  // Optional parameters
  // loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
    },
    // when window width is >= 480px
    
    650: {
      slidesPerView: 2,
      spaceBetween: 32,
      loop: true,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 32,
      loop: true,
    },
    // 1025: {
    //   slidesPerView: 3,
    //   spaceBetween: 32,
    //   loop: true,
    // },
    1025: {
      slidesPerView: 4,
      spaceBetween: 32,
      loop: true,
    },
    // when window width is >= 640px
    1441: {
      slidesPerView: 5,
      spaceBetween: 32
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-catalog-slider .swiper-button-next',
    prevEl: '.js-catalog-slider .swiper-button-prev',
  }
});