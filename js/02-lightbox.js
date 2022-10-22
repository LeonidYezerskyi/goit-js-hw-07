import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector('.gallery');

const elements = galleryItems
  .map(item => {
      const strHTML = 
      `<div class="gallery__item">
       <a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        alt="${item.description}" />
       </a>
      </div>`;
    return strHTML;
  })
  .join("");
ulEl.insertAdjacentHTML("afterbegin", elements);


const onClick = (event) => {
    event.preventDefault();
    if (event.target.className === "gallery__image") {
        const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt",  captionDelay: 250, })
    }
};

ulEl.addEventListener('click', onClick);

console.log(galleryItems);
