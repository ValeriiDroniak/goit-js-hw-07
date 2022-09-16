import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageListenerKlick)

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
            </a>
        </div>
        `
    }).join('');
}

galleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

function onImageListenerKlick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `);

    instance.show();

    galleryRef.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            instance.close();
        }
    });
}