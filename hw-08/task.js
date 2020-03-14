// eslint-disable-next-line import/extensions
import gallery from './gallery-items.js';

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');

const createGalleryItems = gallery.map((elem) => {
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

galleryList.append(...createGalleryItems);

const handleKeyUp = function(event) {
  if (event.code === 'Escape') {
    lightboxImg.removeAttribute('src');
    lightbox.classList.remove('is-open');
  }

  if (event.code === 'ArrowRight') {
    for (let i = 0; i < gallery.length; i += 1) {
      if (lightboxImg.src === gallery[i].original) {
        lightboxImg.src = gallery[(i += 1)].original;
        // if (lightboxImg.src === gallery[gallery.length - 1].original) {
        //   return;
        // }
      }
    }
  }

  if (event.code === 'ArrowLeft') {
    for (let i = 0; i < gallery.length; i += 1) {
      if (lightboxImg.src === gallery[i].original) {
        lightboxImg.src = gallery[(i -= 1)].original;
        // if (lightboxImg.src === gallery[0].original) {
        //   lightboxImg.src = gallery[gallery.length - 1].original;
        // }
      }
    }
  }
};

const handleOpenModal = function(event) {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    return;
  }
  lightboxImg.src = event.target.dataset.source;
  lightbox.classList.add('is-open');
  document.addEventListener('keyup', handleKeyUp);
};

const handleCloseModal = function(event) {
  if (event.target.tagName === 'IMG') {
    return;
  }
  lightboxImg.removeAttribute('src');
  lightbox.classList.remove('is-open');
  document.removeEventListener('keyup', handleKeyUp);
};

galleryList.addEventListener('click', handleOpenModal);
lightbox.addEventListener('click', handleCloseModal);
