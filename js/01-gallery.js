import { galleryItems } from './gallery-items.js';
// Change code below this line


const cardMarcup = createCardMarcup(galleryItems);
const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', cardMarcup);
galleryList.addEventListener('click', cardResize);

function createCardMarcup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return  `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
    }).join('');
}


function cardResize(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  
  const largeImageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${largeImageUrl}" width="1280" height="853">
    </div>
  `);

  instance.show();

}

console.log(galleryItems);


// import { galleryItems } from './gallery-items.js';

// const cardMarcup = createCardMarcup(galleryItems);
// const galleryList = document.querySelector('.gallery');

// galleryList.insertAdjacentHTML('beforeend', cardMarcup);

// function createCardMarcup(cards) {
//   return cards
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//           <a class="gallery__link" href="${original}">
//             <img
//               class="gallery__image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//             />
//           </a>
//         </li>`;
//     }).join('');
// }

// galleryList.addEventListener('click', cardResize);

// let currentInstance = null;

// function cardResize(event) {
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   event.preventDefault();

//   const largeImageUrl = event.target.dataset.source;
//   const instance = basicLightbox.create(`
//     <div class="modal">
//       <img src="${largeImageUrl}" width="1280" height="853">
//     </div>
//   `);

//   currentInstance = instance;
//   instance.show();
//   document.addEventListener('keydown', onEscapePress);
// }

// function onEscapePress(event) {
//   if (event.code === "Escape" && currentInstance !== null && currentInstance.visible()) {
//     currentInstance.close();
//     document.removeEventListener('keydown', onEscapePress);
//     currentInstance = null;
//   }
// }


































// let currentInstance = null;

// function cardResize(event) {
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   event.preventDefault();
  
//   // закриваємо попереднє вікно, якщо воно є
//   if (currentInstance !== null) {
//     currentInstance.close();
//   }
  
//   const imgSrc = event.target.dataset.source;
  
//   // створюємо нове модальне вікно
//   currentInstance = basicLightbox.create(`
//     <div class="modal">
//       <img src="${imgSrc}" alt="">
//     </div>
//   `);

//   // відкриваємо модальне вікно
//   currentInstance.show();

//   // реєструємо обробник події на клавішу Escape
//   document.addEventListener('keydown', onEscapePress);
// }

// function onEscapePress(event) {
//   if (event.code === "Escape" && currentInstance !== null && currentInstance.visible()) {
//     currentInstance.close();
//     document.removeEventListener('keydown', onEscapePress);
//     currentInstance = null;
//   }
// }
