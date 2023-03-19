'use strict';
import Game from './modules/game.js';

window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.level').getAttribute('id') === 'easy') {
    new Game('.level__input-enter', '.level__hero', 'justify-content: center;', 'align-items: center;');
  } else {
    new Game('.level__input-enter', '.level__hero', 'justify-content: space-between;', 'align-items: center;');
  }
});