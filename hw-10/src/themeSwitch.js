import themes from './theme';

const body = document.querySelector('body');
const switchInput = document.querySelector('.js-switch-input');

if (localStorage.getItem('themes') !== null) {
  const themeNow = localStorage.getItem('themes');
  body.classList.add(themeNow);
  if (body.classList.contains(themes.DARK)) {
    switchInput.checked = true;
  }
}

function handleClick(event) {
  if (event.target.checked === true) {
    body.classList.add(themes.DARK);
    localStorage.setItem('themes', themes.DARK);
    body.classList.remove(themes.LIGHT);
    return;
  }

  body.classList.add(themes.LIGHT);
  localStorage.setItem('themes', themes.LIGHT);
  body.classList.remove(themes.DARK);
}

switchInput.addEventListener('click', handleClick);
