const modal = document.getElementById('error-message-modal');
const closeModalButton = document.querySelector('.close-modal-button');

export const closeModal = () => {
  modal.close();
};
const handleCloseModal = (e) => {
  if (isModalOutSideClicked(e)) {
    closeModal();
  }
};
// 모달 외부 클릭 했는지 확인
const isModalOutSideClicked = (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  return (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  );
};

export const showModal = () => {
  modal.showModal();
};

// controller -> evenService -> commonService들의 조합
