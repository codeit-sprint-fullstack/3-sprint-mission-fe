import { validates, validationHandlersA } from './form-validation.js';

export const handleFormSubmit = (e) => {
  e.preventDefault();
  validates.setSubmitButtonState();
  if (validates.checkFormButtonDisabled()) return;
  const currentPage = window.location.pathname;
  if (currentPage.includes('signup.html')) return handleSignupProcess();
  if (currentPage.includes('login.html')) return handleLoginProcess();
  alert('페이지를 찾을 수 없습니다.');
};

export const updateSubmitButtonState = () => validates.setSubmitButtonState();

export const handleFocusOut = (e) => {
  const validateElementId = e.target.id;
  validationHandlersA[validateElementId]();
};

export const closeModal = () => modal.close();

export const handleCloseModal = (e) => {
  if (isModalOutSideClicked(e)) closeModal();
};
