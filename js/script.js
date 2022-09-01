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

});