import { galleryItems } from './gallery-items.js';
// Change code below this line

const divEl = document.querySelector('.gallery');

const elements = galleryItems
  .map(item => {
    const strHTML = `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    return strHTML;
  })
  .join("");
divEl.insertAdjacentHTML("afterbegin", elements);

const onClick = (event) => {
    event.preventDefault();
    if (event.target.className === "gallery__image") {
        const sizeChahge = basicLightbox.create(
            `<img src=${event.target.dataset.source} width="" height="">`,
            {
                onShow: () => {
                    window.addEventListener("keydown", closeModal);
                },
                onClose: () => {
                    removeEventListener("keydown", closeModal);
                },
            }
        )
        sizeChahge.show()
        function closeModal(event) {
            if (event.code === "Escape") {
                sizeChahge.close();
            }
        }
    }
};

divEl.addEventListener('click', onClick);

console.log(galleryItems)