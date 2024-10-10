export const fadeIn = element => {
  element.classList.add('hide');
  setTimeout(() => {
    element.classList.add('show');
    element.classList.remove('hide');
  }, 0);
};

export const fadeOut = element => {
  element.classList.add('hide');
  setTimeout(() => {
    element.remove();
  }, 500);
};
