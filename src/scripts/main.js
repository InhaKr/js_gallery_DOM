'use strict';

const ul = document.querySelector('#thumbs');
const largeImg = document.querySelector('.gallery__large-img');

ul.addEventListener('click', (e) => {

  const mainScreen = e.target.closest('.list-item__link');

  if (!mainScreen) {
    return;
  }

  e.preventDefault();

  largeImg.src = mainScreen.href;
});
