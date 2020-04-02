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
};
console.dir(refs.inputForm.elements.query.value);

function clearList() {
  refs.gallery.innerHTML = '';
}

const handelInput = (event) => {
  event.preventDefault();

  clearList();

  const input = refs.inputForm.elements.query;
  photosService.searchQuery = input.value;

  photosService.resetPage();

  photosService.axiosArticles().then((data) => {
    refs.gallery.insertAdjacentHTML('beforeend', itemCadrTempl(data));
  });

  input.value = '';
};

refs.inputForm.addEventListener('submit', handelInput);
