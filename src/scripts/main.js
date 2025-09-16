'use strict';

const ul = document.querySelector('#thumbs');
const largeImg = document.querySelector('.gallery__large-img');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const mainScreen = e.target.closest('.list-item__link');
  largeImg.src = mainScreen.href;
});
