import './style.css';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import 'pnotify/dist/PNotifyBrightTheme.css';

import itemCadrTempl from './templates/itemCard.hbs';
import apiService from './js/apiService';
import isOpenLightboxHandle from './js/basicLightbox';

PNotify.defaults.delay = 1000;

const refs = {
  gallery: document.querySelector('.gallery'),
  inputForm: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('button[type="button"]'),
  upwardBtn: document.querySelector('.button-upward'),
  borderObser: document.querySelector('.border-observer'),
};

function clearList() {
  refs.gallery.innerHTML = '';
}

function isertItemCard(item) {
  const markup = itemCadrTempl(item);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  // BUTTON LOAD MORE===================================================================
  if (apiService.page > 2) {
    const offsetHeightForm = refs.inputForm.offsetHeight;
    window.scrollBy({
      top: document.documentElement.clientHeight - offsetHeightForm,
      behavior: 'smooth',
    });
  }

  if (markup) {
    refs.loadMoreBtn.classList.add('is-active');
  } // BUTTON LOAD MORE===================================================================
}

function axiosArticles() {
  apiService
    .axiosArticles()
    .then((res) => {
      isertItemCard(res);
      if (!res.length) {
        PNotify.info({
          text: 'No results were found for your request.',
        });
      }
    })
    .catch((error) => {
      PNotify.error({
        text: error.message,
      });
    });
}

const handleInput = (event) => {
  event.preventDefault();

  clearList();

  const input = refs.inputForm.elements.query;

  if (!input.value) {
    PNotify.info({
      text: 'No results were found for your request.',
    });
    return;
  }
  apiService.searchQuery = input.value;

  apiService.resetPage();

  axiosArticles();

  input.value = '';
};

// BUTTON LOAD MORE===================================================================
function loadMoreButtonHandle() {
  if (!apiService.searchQuery) {
    PNotify.info({
      text: 'No results were found for your request.',
    });
    return;
  }
  axiosArticles();
}
refs.loadMoreBtn.addEventListener('click', loadMoreButtonHandle); // BUTTON LOAD MORE===================================================================

// INFINITY SCROLL Observer====================================================================
// function loadMoreScroll() {
//   if (apiService.searchQuery) {
//     axiosArticles();
//   }
// }

// const infinScroll = (target) => {
//   const options = {
//     rootMargin: '0px 0px 100px 0px',
//     threshold: 0.01,
//   };
//   const observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//       loadMoreScroll();
//     }
//   }, options);
//   observer.observe(target);
// };

// infinScroll(refs.borderObser); // INFINITY SCROLL Observer===================================================================

refs.inputForm.addEventListener('submit', handleInput);

refs.gallery.addEventListener('click', isOpenLightboxHandle);

refs.upwardBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
