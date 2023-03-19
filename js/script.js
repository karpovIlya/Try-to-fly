'use strict';
import Game from './modules/game.js';

window.addEventListener("DOMContentLoaded", () => {
  new Game('.level__input-enter', '.level__hero', 'justify-content: center;', 'align-items: center;');
});