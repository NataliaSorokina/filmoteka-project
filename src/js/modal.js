import NewApiService from './apiService.js';  
import cardModalFilm from '../templates/card-modal.hbs';

const galleryFilms = document.querySelector('.gallery__films');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
// const modalFilm = document.querySelector('card-modal');

const newApiService = new NewApiService();



// console.log(modal.dataset.modal);
// render();


galleryFilms.addEventListener('click', modalWindowOpenHandler);



function modalWindowOpenHandler(event) {
  event.preventDefault();
  const movieID = event.target.dataset.id;
closeModalBtn.addEventListener('click', modalWindowCloseHandler);
modal.addEventListener('click', backdropClickHandler);
window.addEventListener('keydown', escKeyPressHandler);

    if (event.target.nodeName !== 'IMG') {
        return;
    }
  modal.classList.remove('visually-hidden');
  renderMovieByID(movieID);
//     refs.image.src = event.target.dataset.source;
//     refs.image.alt = event.target.alt;
}


function modalWindowCloseHandler() {

closeModalBtn.removeEventListener('click', modalWindowCloseHandler);
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



function renderMovieByID(movieID) {
  // newApiService.page = 1;
  newApiService
    .fetchTheMovie(movieID)
    .then(console.log(movie))
    .then(renderModalFilm)
    .catch(err => {
      console.log('error in function render');
      // modalFilm.innerHTML = `<img  src="${errorUrl}" />`;
    });
}

function renderModalFilm(movie) {
  modalFilm.innerHTML = cardModalFilm(movie);
}