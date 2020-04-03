import './style.css';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import 'pnotify/dist/PNotifyBrightTheme.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import itemCadrTempl from './templates/itemCard.hbs';
import photosService from './js/photos-service';

// const instance = basicLightbox.create(`
//     <img src="#" alt="">
// `);
// instance.show();

const refs = {
  gallery: document.querySelector('.gallery'),
  inputForm: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('button[type="button"]'),
};

function loadMoreButtonHandle() {
  axiosArticles();
}

function clearList() {
  refs.gallery.innerHTML = '';
}

function isertItemCard(item) {
  const markap = itemCadrTempl(item);
  refs.gallery.insertAdjacentHTML('beforeend', markap);
}

function axiosArticles() {
  photosService
    .axiosArticles()
    .then(isertItemCard)
    .catch((error) => console.warn(error));
}

const handleInput = (event) => {
  event.preventDefault();

  clearList();

  const input = refs.inputForm.elements.query;
  photosService.searchQuery = input.value;

  photosService.resetPage();

  axiosArticles();

  input.value = '';
};

refs.inputForm.addEventListener('submit', handleInput);
refs.loadMoreBtn.addEventListener('click', loadMoreButtonHandle);
