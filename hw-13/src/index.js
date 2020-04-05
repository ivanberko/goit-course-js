import './style.css';
import PNotify from 'pnotify/dist/es/PNotify';
// import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
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
  const markap = itemCadrTempl(item);
  refs.gallery.insertAdjacentHTML('beforeend', markap);
  // const a = document.documentElement.scrollHeight;
  // const b = document.documentElement.clientHeight;
  // console.log(a);
  // console.log(b);
  // console.log(a - b);
  // window.scrollTo({
  //   top: a - b,
  //   behavior: 'smooth',
  // });
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
  photosService.searchQuery = input.value;

  photosService.resetPage();

  axiosArticles();

  input.value = '';
};

function loadMoreButtonHandle() {
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
