import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



import { galleryItems } from './gallery-items.js';


// // Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                alt="${description}"    />
        </a>`;
    })
    .join('');
}
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const asd = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
asd.on("show.simplelightbox",function (e){})