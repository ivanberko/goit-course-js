import './style.css';
import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/PNotifyBrightTheme.css';

import itemCadrTempl from './templates/itemCard.hbs';
import apiService from './js/apiService';
import isOpenLightboxHandle from './js/basicLightbox';

PNotify.defaults.delay = 1000;

const refs = {
  gallery: document.querySelector('.gallery'),
  inputForm: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('button[type="button"]'),
};

function clearList() {
  refs.gallery.innerHTML = '';
}

function isertItemCard(item) {
  const markup = itemCadrTempl(item);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  if (markup) {
    window.scrollTo({
      top: refs.gallery.offsetHeight - document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  }
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
        return;
      }
      PNotify.success({
        text: 'Your request completed successfully',
      });
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

function loadMoreButtonHandle() {
  if (!apiService.searchQuery) {
    PNotify.info({
      text: 'No results were found for your request.',
    });
    return;
  }
  axiosArticles();
}

refs.inputForm.addEventListener('submit', handleInput);

refs.loadMoreBtn.addEventListener('click', loadMoreButtonHandle);

refs.gallery.addEventListener('click', isOpenLightboxHandle);
