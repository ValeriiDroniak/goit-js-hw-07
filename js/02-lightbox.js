import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageListenerKlick)

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

galleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

function onImageListenerKlick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        captionSelector: 'img',
        captionsData: 'alt',
        caption: true,
        captionPosition: 'bottom',
        captionDelay: 250,
    });

    lightbox.on('show.simplelightbox', function () {
        document.body.dataset.originalPaddingRight = 0;
        document.body.style.paddingRight = 0 + 'px';
        lightbox.domNodes.wrapper.remove();
        lightbox.domNodes.overlay.remove();
    })
}