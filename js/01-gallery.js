// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
let galleryMarkup = '';

galleryItems.forEach(({ preview, original, description }) => {
  galleryMarkup += `
  <ul class="gallery">
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  </ul>
  `;
});

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  overlay: true,
  overlayOpacity: 0.7,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
