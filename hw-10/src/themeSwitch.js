import themes from './theme';

const body = document.querySelector('body');
const switchControl = document.querySelector('.switch__label');
const switchInput = document.querySelector('.js-switch-input');

if (localStorage.getItem('themes') !== null) {
  const themeNow = localStorage.getItem('themes');
  body.classList.add(themeNow);
  if (body.classList.contains(themes.DARK)) {
    switchInput.checked = true;
  }
}

function handleClick() {
  if (switchInput.checked === false) {
    body.classList.add(themes.DARK);
    localStorage.setItem('themes', themes.DARK);
    body.classList.remove(themes.LIGHT);
  } else if (switchInput.checked === true) {
    body.classList.add(themes.LIGHT);
    localStorage.setItem('themes', themes.LIGHT);
    body.classList.remove(themes.DARK);
  }
}

switchControl.addEventListener('click', handleClick);
