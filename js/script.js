MicroModal.init({
  openTrigger: 'data-custom-open',
  closeTrigger: 'data-custom-close',
  disableScroll: true,
  disableFocus: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
});

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

  // сворачивать мобильное меню, если кликнули по одному из пунктов 
  const menuItems = document.querySelectorAll('.mobile-menu__link');
  for (let menuItemsEl of menuItems) {
    menuItemsEl.addEventListener('click', function () {
      document.body.classList.remove('mob-menu-open');
    });
  };

  // слайдер в первом экране 
  const swiperFirst = new Swiper('.js-first-slider', {
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

  var swiperGallery = new Swiper(".js-slider-gallery", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 8,
    loop: true,
    pagination: {
      el: ".gallery .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.gallery .swiper-button-next',
      prevEl: '.gallery .swiper-button-prev',
    },
  });

  // слайдер каталог 
  const swiperCatalog = new Swiper('.js-catalog-slider', {
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
      },
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

  // Яндекс карта 
  if (document.querySelector('.js-map')) {
    // Интерактивная карта с гео меткой
    let center = [45.066341574598155, 38.95656499999995];

    function init() {

      let map = new ymaps.Map("map", {
        center: center, // ваши данные
        zoom: 17
      });

      let placemarRkschool = new ymaps.Placemark([45.066341574598155, 38.95656499999995], {}, {
        iconLayout: 'default#image',
        /* говорим что будем отображать на карте в качестве геометки  */
        iconImageHref: './img/icon-map-mark-2.svg',
        /* указываем пусть к картинке на нашем сайте  */
        iconImageSize: [40, 56],
        /* размеры картинки  */
        iconImageOffset: [-22, -22]
      });

      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      map.geoObjects.add(placemarRkschool);

      placemarRkschool.events
        .add('mouseenter', function (e) {
          e.get('target').options.set('iconImageHref', './img/icon-map-mark-2.svg');
        })
        .add('mouseleave', function (e) {
          e.get('target').options.set('iconImageHref', './img/icon-map-mark-1.svg');
        });
    }

    ymaps.ready(init);
  };

});