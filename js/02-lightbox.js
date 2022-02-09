import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const cardsGallery = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);
let gallery = new SimpleLightbox('.gallery a', {
    captions: true, captionsData: 'alt', captionsDelay:250});

function createGalleryCards(galleryItem) {
  return galleryItem
      .map(({ preview, original, description }) => {
return `<li>
          <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
          </li>`;

    })
    .join('');
}

console.log(galleryItems);
