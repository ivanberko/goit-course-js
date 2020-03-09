// eslint-disable-next-line import/extensions
import gallery from './gallery-items.js';

const galleryList = document.querySelector('.js-gallery');

const galleryItems = function(array) {
  return array.map((elem) => {
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
};

galleryList.append(...galleryItems(gallery));
