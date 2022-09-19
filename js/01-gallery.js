import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const instanceBox = basicLightbox.create(`
        <img class="original-img" src="" width="800" height="600">
    `, {
    onShow: () => {
        document.addEventListener('keydown', onEscKeyPress);
    },
    onClose: () => {
        document.removeEventListener('keydown', onEscKeyPress);
    }
}
);
const originalImage = instanceBox.element().querySelector('.original-img');

galleryRef.addEventListener('click', onImageListenerKlick);
galleryRef.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
            </a>
        </div>
        `;
    }).join('');
}

function onImageListenerKlick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    event.preventDefault();

    originalImage.src = event.target.dataset.source;
    instanceBox.show();
}

function onEscKeyPress(e) {
    if (e.code === "Escape") {
        instanceBox.close();
    }
}