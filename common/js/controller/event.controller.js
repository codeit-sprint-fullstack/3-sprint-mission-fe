import { handleFormSubmit, updateSubmitButtonState } from './eventFunctions.js';

const modal = document.getElementById('error-message-modal');
const closeModalButton = document.querySelector('.close-modal-button');
const form = document.getElementById('form');
const email = document.getElementById('email');
const nickname = document.getElementById('nickname');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const formButton = document.getElementById('form-button');
const passwordFields = document.querySelectorAll('.password-field');
const visibilityImages = document.querySelectorAll(
  '.password-visibility-image'
);

eventBuilder
  .get('form-button')
  .event('input')
  .eventService(updateSubmitButtonState);

form.addEventListener('input', updateSubmitButtonState);
form.addEventListener('submit', handleFormSubmit);
form.addEventListener('focusout', handleFocusOut);
closeModalButton.addEventListener('click', closeModal);
modal.addEventListener('click', handleCloseModal);
