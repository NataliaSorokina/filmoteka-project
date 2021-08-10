const galleryFilms = document.querySelector('.gallery__films');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');


galleryFilms.addEventListener('click', modalWindowOpenHandler);


function modalWindowOpenHandler(event) {
event.preventDefault();
closeModalBtn.addEventListener('click', modalWindowCloseHandler);
modal.addEventListener('click', backdropClickHandler);
window.addEventListener('keydown', escKeyPressHandler);

    if (event.target.nodeName !== 'IMG') {
        return;
    }
   modal.classList.remove('visually-hidden');
//     refs.image.src = event.target.dataset.source;
//     refs.image.alt = event.target.alt;
}


function modalWindowCloseHandler() {

closeModalBtn.removeEventListener('click', modalCloseHandler);
modal.removeEventListener('click', backdropClickHandler);
window.removeEventListener('keydown', escKeyPressHandler);
    
    modal.classList.add('visually-hidden');
  }

   function backdropClickHandler(event) {
   if (event.currentTarget === event.target) {
       modal.classList.add('visually-hidden');
    }
}

 function escKeyPressHandler(event) {
    if (event.code === 'Escape') {
        modal.classList.add('visually-hidden');
    }
}