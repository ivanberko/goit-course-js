import './style.css';
import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/PNotifyBrightTheme.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import itemCadrTempl from './templates/itemCard.hbs';
import photosService from './js/photos-service';

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
    const quantityRowsOfscrol =
      document.querySelector('.gallery-item').offsetHeight * 3;

    window.scrollTo({
      top: refs.gallery.offsetHeight - quantityRowsOfscrol,
      behavior: 'smooth',
    });
  }
}

function axiosArticles() {
  photosService
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
  photosService.searchQuery = input.value;

  photosService.resetPage();

  axiosArticles();

  input.value = '';
};

function loadMoreButtonHandle() {
  if (!photosService.searchQuery) {
    PNotify.info({
      text: 'No results were found for your request.',
    });
    return;
  }
  axiosArticles();
}

function handleClickImg(e) {
  const imageURL = e.target;
  if (imageURL.nodeName === 'IMG') {
    const showLightbox = basicLightbox.create(`
    <img src=${imageURL.getAttribute('data-origin-url')} alt="">
`);
    showLightbox.show();
  }
}

refs.inputForm.addEventListener('submit', handleInput);

refs.loadMoreBtn.addEventListener('click', loadMoreButtonHandle);

refs.gallery.addEventListener('click', handleClickImg);

// document.addEventListener('readystatechange', () =>
//   console.log(document.readyState),
// );
