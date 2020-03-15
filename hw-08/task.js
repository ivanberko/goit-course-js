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

const handleDown = function(event) {
  switch (event.code) {
    case 'Escape':
      lightboxImg.removeAttribute('src');
      lightbox.classList.remove('is-open');
      break;

    case 'ArrowRight': {
      const next = gallery.findIndex(
        (item) => lightboxImg.src === item.original,
      );
      if (next + 1 < gallery.length) {
        lightboxImg.src = gallery[next + 1].original;
        return;
      }
      lightboxImg.src = gallery[0].original;
      break;
    }

    case 'ArrowLeft': {
      const prev = gallery.findIndex(
        (item) => lightboxImg.src === item.original,
      );
      if (prev - 1 >= 0) {
        lightboxImg.src = gallery[prev - 1].original;
        return;
      }
      lightboxImg.src = gallery[gallery.length - 1].original;
      break;
    }

    default:
      break;
  }
};

const handleOpenModal = function(event) {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    lightboxImg.src = event.target.dataset.source;
    lightbox.classList.add('is-open');
    document.addEventListener('keyup', handleDown);
  }
};

const handleCloseModal = function(event) {
  if (event.target.tagName !== 'IMG') {
    lightboxImg.removeAttribute('src');
    lightbox.classList.remove('is-open');
    document.removeEventListener('keyup', handleDown);
  }
};

galleryList.addEventListener('click', handleOpenModal);
lightbox.addEventListener('click', handleCloseModal);
