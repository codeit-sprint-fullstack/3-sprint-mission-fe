const eyeOpenIcon = '../../../assets/images/auth/btn_visibility_on_24px.svg';
const eyeCloseIcon = '../../../assets/images/auth/btn_visibility_off_24px.svg';

const passwordFields = document.querySelectorAll('.password-field');
const visibilityImages = document.querySelectorAll(
  '.password-visibility-image'
);

// 비밀번호 가리기/보이기 기능
visibilityImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    const passwordField = passwordFields[index];
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      image.src = eyeOpenIcon;
    } else {
      passwordField.type = 'password';
      image.src = eyeCloseIcon;
    }
  });
});

// 입력 필드에 내용이 있을 때만 아이콘을 보이게 하기
passwordFields.forEach((field, index) => {
  field.addEventListener('input', () => {
    const image = visibilityImages[index];
    if (field.value.length > 0) {
      image.style.display = 'inline';
    } else {
      image.style.display = 'none';
    }
  });
});
