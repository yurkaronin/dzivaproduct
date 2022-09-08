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

  var swiper = new Swiper(".js-slider-gallery", {
    // slidesPerView: "auto",
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 8,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      650: {
        slidesPerView: 1.2,
      },
      769: {
        slidesPerView: 1.2,
      },
      1025: {
        slidesPerView: 1.2,
      },
      1441: {
        slidesPerView: 1.8,
      }
    },
    pagination: {
      el: ".js-slider-gallery .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.js-slider-gallery .swiper-button-next',
      prevEl: '.js-slider-gallery .swiper-button-prev',
    },
  });

  // слайдер каталог 
  const catalogSlider = new Swiper('.js-catalog-slider', {
    // loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
      },
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
      1025: {
        slidesPerView: 4,
        spaceBetween: 32,
        loop: true,
      },
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

  // аккордеоны 
  var acc = document.getElementsByClassName("accordion");
  if (acc) {
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.parentNode.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        }
      });
    };
  };

});



