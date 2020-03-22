import menu from './menu.json';
import menuTemplate from './menuTemplate.hbs';

const menuDishes = document.querySelector('.js-menu');

const markupMenu = menu.reduce(
  (str, item) => `${str}${menuTemplate(item)}`,
  '',
);
menuDishes.insertAdjacentHTML('beforeend', markupMenu);
