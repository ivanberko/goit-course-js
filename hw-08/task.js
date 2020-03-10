// eslint-disable-next-line import/extensions
import gallery from './gallery-items.js';

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
// const closeLightboxBtn = document.querySelector(
//   'button[data-action="close-lightbox"]',
// );

const galleryItems = gallery.map((elem) => {
  const item = document.createElement('li');
  item.classList.add('gallery__item');
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.setAttribute('href', elem.original);
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.setAttribute('src', elem.preview);
  img.setAttribute('alt', elem.description);
  img.dataset.source = elem.original;
  link.append(img);
  item.append(link);
  return item;
});

galleryList.append(...galleryItems);

const openModal = function(event) {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
    lightboxImg.src = event.target.dataset.source;
    lightbox.classList.add('is-open');
  }
};

const closeModal = function(event) {
  if (event.target.tagName === 'IMG') {
    return;
  }
  lightboxImg.removeAttribute('src');
  lightbox.classList.remove('is-open');
};

galleryList.addEventListener('click', openModal);
lightbox.addEventListener('click', closeModal);
document.addEventListener('keyup', (event) => {
  if (event.code === 'Escape') {
    lightboxImg.removeAttribute('src');
    lightbox.classList.remove('is-open');
  }
});
