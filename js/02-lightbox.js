import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'alt',
    caption: true,
    captionPosition: 'bottom',
    captionDelay: 250,
});

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
        </a>
        `}).join('');
}