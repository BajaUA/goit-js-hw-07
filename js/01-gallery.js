import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const itemsMarkup = createGalleryMarkup(galleryItems);


function createGalleryMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join("");
}
galleryBox.insertAdjacentHTML("beforeend", itemsMarkup);

galleryBox.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const originalURL = event.target.dataset.source;
    openModal(originalURL);
  }
});

function openModal(originalURL) {
  const instance = basicLightbox.create(`
     <img src="${originalURL}" width="auto" height="auto">
`);

  instance.show();
}
console.log(galleryItems);