import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

function createItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'>
      <a class='gallery__link' href='${original}'>
        <img
        class='gallery__image' src ='${preview}'
        data-source='${original}' 
        alt ='${description}'
        />
        </a>
        </div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
    <img src='${e.target.dataset.source}'>
    </div>
`);

  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") instance.close();
  });
}
