// (() => {
//   const refs = {
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.closeModalBtn.addEventListener('click', closeModal);

//   function closeModal() {
//     refs.modal.classList.add('visually-hidden');
//   }
// })();



const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const backdrop = document.querySelector('.backdrop');

window.addEventListener('keydown', escKeyPressHandler);
closeModalBtn.addEventListener('click', modalCloseHandler);
backdrop.addEventListener('click', backdropClickHandler);



function modalCloseHandler() {
    modal.classList.add('visually-hidden');
}
  
 function backdropClickHandler(event) {
   if (event.currentTarget === event.target) {
       backdrop.classList.add('visually-hidden');
    }
}

 function escKeyPressHandler(event) {
    if (event.code === 'Escape') {
        backdrop.classList.add('visually-hidden');
    }
}




// function modalWindowOpenHandler(event) {
//     event.preventDefault();
//     refs.btn.addEventListener('click', modalWindowCloseHandler);
//     refs.overlay.addEventListener('click', overlayClickHandler);
//     window.addEventListener('keydown', escKeyPressHandler);
//     window.addEventListener('keydown', imagesScrollHandler);

//     if (event.target.nodeName !== 'IMG') {
//         return;
//     }

//     refs.lightbox.classList.add('is-open');
//     refs.image.src = event.target.dataset.source;
//     refs.image.alt = event.target.alt;
// }

// function modalWindowCloseHandler() {
//     refs.btn.addEventListener('click', modalWindowCloseHandler);
//     refs.overlay.addEventListener('click', overlayClickHandler);
//     window.removeEventListener('keydown', escKeyPressHandler);
//     window.removeEventListener('keydown', imagesScrollHandler);
//     refs.lightbox.classList.remove('is-open');
//     refs.image.src = '';
//     refs.image.alt = '';
// }

// function overlayClickHandler(event) {
//     if (event.currentTarget === event.target) {
//         modalWindowCloseHandler();
//     }
// }

// function escKeyPressHandler(event) {
//     if (event.code === 'Escape') {
//         modalWindowCloseHandler();
//     }
// }

