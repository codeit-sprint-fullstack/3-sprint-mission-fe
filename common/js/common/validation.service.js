import { USER_DATA } from '../../data/users.js';
import { EMAIL_REGEX } from './regex.js';
import { showModal } from './modal.js';

const checkFormButtonDisabled = () => !formButton;
// 유효성 검사 함수
const isValidInput = (input) => input.value.trim() !== '';
const isValidPassword = (password) => password.value.trim().length >= 8;
const isEmailRegistered = (email) => {
  return USER_DATA.find((user) => user.email === email.value.trim());
};
const validateEmail = () => {
  const emailValue = email.value.trim();
  if (emailValue === '') {
    setError(email, '이메일을 입력해주세요.', 'email');
  } else if (!isValidEmail(emailValue)) {
    setError(email, '잘못된 이메일 형식입니다.', 'email');
  } else {
    setSuccess(email);
  }
};
const isValidEmail = (email) => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
};
const validateNickname = () => {
  const nicknameValue = nickname.value.trim();
  if (nicknameValue === '') {
    setError(nickname, '닉네임을 입력해주세요.', 'nickname');
  } else {
    setSuccess(nickname);
  }
};
const validatePassword = () => {
  const passwordValue = password.value.trim();
  if (passwordValue === '') {
    setError(password, '비밀번호를 입력해주세요.', 'password');
  } else if (passwordValue.length < 8) {
    setError(password, '비밀번호를 8자 이상 입력해주세요', 'password');
  } else {
    setSuccess(password);
  }
};
const validatePasswordConfirmation = () => {
  const passwordValue = password.value.trim();
  const passwordConfirmValue = passwordConfirm.value.trim();
  if (passwordConfirmValue === '') {
    setError(passwordConfirm, '비밀번호를 입력해주세요.', 'password-confirm');
  } else if (passwordConfirmValue !== passwordValue) {
    setError(
      passwordConfirm,
      '비밀번호가 일치하지 않습니다.',
      'password-confirm'
    );
  } else {
    setSuccess(passwordConfirm);
  }
};
