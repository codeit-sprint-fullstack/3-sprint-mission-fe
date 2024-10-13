import { USER_DATA } from '../../data/users.js';
import { EMAIL_REGEX } from './regex.js';
import { showModal } from './modal.js';

const form = document.getElementById('form');
const email = document.getElementById('email');
const nickname = document.getElementById('nickname');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const formButton = document.getElementById('form-button');

// -----폼 제출 시 이벤트 처리-----

const handleFormSubmit = (e) => {
  e.preventDefault();

  // 유효성 검사
  setSubmitButtonState();

  // 회원 가입 처리
  if (formButton.disabled) return;

  const currentPage = window.location.pathname;

  if (currentPage.includes('signup.html')) {
    handleSignupProcess();
  } else if (currentPage.includes('login.html')) {
    handleLoginProcess();
  } else {
    alert('페이지를 찾을 수 없습니다.');
  }
};

form.addEventListener('submit', handleFormSubmit);

// -----입력 시 제출 버튼 상태 업데이트-----

const updateSubmitButtonState = () => {
  setSubmitButtonState();
};

form.addEventListener('input', updateSubmitButtonState);

// 제출 버튼 활성화 상태 설정 함수
const setSubmitButtonState = () => {
  const currentPage = window.location.pathname;
  let isValid = false;

  // 공통 조건 (이메일과 비밀번호)
  const emailValid = isValidInput(email) && isValidEmail(email.value.trim());
  const passwordValid = isValidInput(password) && isValidPassword(password);

  if (currentPage.includes('login.html')) {
    isValid = emailValid && passwordValid;
  } else if (currentPage.includes('signup.html')) {
    const nicknameValid = isValidInput(nickname);
    const passwordConfirmValid =
      isValidInput(passwordConfirm) &&
      passwordConfirm.value.trim() === password.value.trim();

    isValid =
      emailValid && nicknameValid && passwordValid && passwordConfirmValid;
  }

  formButton.disabled = !isValid;
};

// 유효성 검사 함수
const isValidInput = (input) => input.value.trim() !== '';
const isValidPassword = (password) => password.value.trim().length >= 8;

// 회원 가입 페이지 폼 제출 이벤트 처리
const handleSignupProcess = () => {
  // 이미 가입된 이메일인지 확인
  if (isEmailRegistered(email)) {
    showModal();
  } else {
    // 회원가입 완료
    USER_DATA.push({
      email: email.value.trim(),
      password: password.value.trim(),
    });
    alert('회원가입이 완료되었습니다.');
    window.location.href = '/pages/auth/login/login.html'; // 로그인 페이지 이동
  }
};

const isEmailRegistered = (email) => {
  return USER_DATA.find((user) => user.email === email.value.trim());
};

// 로그인 페이지 폼 제출 이벤트 처리
const handleLoginProcess = () => {
  // 로그인 처리
  if (isUserExist(email, password)) {
    // alert('로그인 되었습니다.');
    window.location.href = '../../../items.html'; // 아이템 페이지 이동
  } else {
    showModal();
  }
};

const isUserExist = (email, password) => {
  return USER_DATA.find(
    (user) =>
      user.email === email.value.trim() &&
      user.password === password.value.trim()
  );
};

// -----포커스 아웃 시 유효성 검사-----
const handleFocusOut = (e) => {
  const validateElementId = e.target.id;
  validateForm(validateElementId);
};

form.addEventListener('focusout', handleFocusOut);

const validateForm = (validateElementId) => {
  const validationHandlers = {
    email: () => validateEmail(),
    nickname: () => validateNickname(),
    password: () => validatePassword(),
    'password-confirm': () => validatePasswordConfirmation(),
  };
  if (validationHandlers[validateElementId]) {
    validationHandlers[validateElementId]();
  }
};

// input 요소에 에러 메시지와 상태를 설정하는 함수

const setError = (element, message, type) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');

  /* 매개변수에 type 을 추가했으나 이게 리팩토링에 관여가 되는지 아래의 코드를 만듦으로써 의문이 듦 */

  // element.focus();

  // const errorFocusColor = getComputedStyle(
  //   document.documentElement
  // ).getPropertyValue('--input-error-color');

  // if (
  //   type === 'email' ||
  //   type === 'nickname' ||
  //   type === 'password' ||
  //   type === 'nickname'
  // ) {
  //   element.style.borderColor = errorFocusColor;
  // }
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
};

// 유효성 검사 함수들
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
