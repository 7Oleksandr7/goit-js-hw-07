import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const itemsMarkup = createItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", itemsMarkup);

function createItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class='gallery__link' href='${original}'>
        <img  class='gallery__image' src ='${preview}' alt ='${description}'>
        </a></li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
