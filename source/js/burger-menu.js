let mainHeader = document.querySelector('.main-header');
let headerToggle = document.querySelector('.main-header__toggle');
let navContainer = document.querySelector('.main-nav');
let burgerButton = document.querySelector('.main-header__toggle');

navContainer.classList.remove('main-nav--no-js');
burgerButton.classList.remove('main-header__toggle--no-js');

headerToggle.addEventListener('click', function () {
  if (mainHeader.classList.contains('main-header--closed')) {
    mainHeader.classList.remove('main-header--closed');
    mainHeader.classList.add('main-header--opened');
  } else {
    mainHeader.classList.add('main-header--closed');
    mainHeader.classList.remove('main-header--opened');
  }
});


