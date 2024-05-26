import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const makeGalleryElementsMarkup = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `
    }).join('');
};

const onGalleryElementsClick = event => {
    event.preventDefault();

    const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', captionPosition: 'bottom', animationSpeed: 250  });
}

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onGalleryElementsClick);

const galleryElementsMarkup = makeGalleryElementsMarkup(galleryItems);

galleryList.innerHTML = galleryElementsMarkup;