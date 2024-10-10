import { fadeIn, fadeOut } from '/scripts/utils/fadeEffect.js';

let isToastShow = false;

export const showToast = (target, message) => {
  // console.log(`target: ${target.name}, message: ${message}`);
  if (isToastShow) return;
  isToastShow = true;

  const toast = document.createElement('output');
  toast.className = 'toast-message';
  toast.textContent = message;
  toast.role = 'alert';
  toast.ariaLive = 'assertive';
  toast.ariaInvalid = true;
  target.after(toast);
  toast.classList.add('hide');
  setTimeout(() => {
    toast.classList.remove('hide');
    toast.classList.add('show');
  }, 10);
  setTimeout(() => {
    fadeOut(toast);
    isToastShow = false;
  }, 1000);
};

export const showModal = message => {
  const modalContainer = document.createElement('div');
  const modal = document.createElement('div');
  const modalMessage = document.createElement('p');
  const closeButton = document.createElement('button');
  modalContainer.className = 'modal-container';
  modal.className = 'modal';
  modalMessage.className = 'modal-message';
  closeButton.className = 'close-button';
  fadeIn(modalContainer);
  modalMessage.textContent = message;
  closeButton.textContent = '확인';
  closeButton.addEventListener('click', () => fadeOut(modalContainer));
  modal.appendChild(modalMessage);
  modal.appendChild(closeButton);
  modalContainer.appendChild(modal);
  wrapContainer.appendChild(modalContainer);
};
