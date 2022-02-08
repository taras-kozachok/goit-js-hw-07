import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const cardsGallery = createGalleryCards(galleryItems);

 galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    
    evt.preventDefault();
    const isGalleryEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryEl) {
        
        return;}
    console.log(evt.target.dataset.source);
    basicLightbox.create(`
		<img width="1400" height="900" src=${evt.target.dataset.source}>
	`).show()
   }

function createGalleryCards(galleryItem) {
  return galleryItem
      .map(({ preview, original, description }) => {
          return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

console.log(galleryItems);
