const modal = document.getElementById('error-message-modal');
const closeModalButton = document.querySelector('.close-modal-button');

// 모달 닫기 버튼 이벤트
closeModalButton.addEventListener('click', () => {
  closeModal();
});

// 모달 외부 클릭 시 닫기
modal.addEventListener('click', (e) => {
  if (isModalOutSideClicked) {
    closeModal();
  }
});

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

export const closeModal = () => {
  modal.close();
};
