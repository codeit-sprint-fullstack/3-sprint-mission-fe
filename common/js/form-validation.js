import { USER_DATA } from '../../data/users.js';

const form = document.getElementById('form');
const email = document.getElementById('email');
const nickname = document.getElementById('nickname');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const formButton = document.getElementById('form-button');

/* 모달 관련 */
const modal = document.getElementById('error-message-modal');
const closeModalButton = document.querySelector('.close-modal-button');

// 폼 제출 시 이벤트 처리
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // 유효성 검사
  setSubmitButtonState();

  // 회원 가입 처리
  if (!formButton.disabled) {
    const currentPage = window.location.pathname;
    if (currentPage.includes('signup.html')) {
      // 이미 가입된 이메일인지 확인
      if (isEmailRegistered(email)) {
        modal.showModal();
      } else {
        // 회원가입 완료
        USER_DATA.push({
          email: email.value.trim(),
          password: password.value.trim(),
        });
        alert('회원가입이 완료되었습니다.');
        window.location.href = '/pages/auth/login/login.html'; // 로그인 페이지 이동
      }
    } else if (currentPage.includes('login.html')) {
      // 로그인 처리
      const user = USER_DATA.find(
        (user) =>
          user.email === email.value.trim() &&
          user.password === password.value.trim()
      );
      if (user) {
        // alert('로그인 되었습니다.');
        window.location.href = '../../../items.html'; // 아이템 페이지 이동
      } else {
        modal.showModal();
      }
    }
  }
});

form.addEventListener('input', () => {
  // 유효성 검사
  setSubmitButtonState();
});

form.addEventListener('focusout', (e) => {
  const elementId = e.target.id;
  const validationHandlers = {
    email: () => validateEmail(),
    nickname: () => validateNickname(),
    password: () => validatePassword(),
    'password-confirm': () => validatePasswordConfirmation(),
  };
  if (validationHandlers[elementId]) {
    validationHandlers[elementId]();
  }
});

// 모달 닫기 이벤트 처리

closeModalButton.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});

const isEmailRegistered = (email) => {
  return USER_DATA.find((user) => user.email === email.value.trim());
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
};

const isValidEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
};

// ----------유효성 검사 함수들-----------
const validateEmail = () => {
  const emailValue = email.value.trim();
  if (emailValue === '') {
    setError(email, '이메일을 입력해주세요.');
  } else if (!isValidEmail(emailValue)) {
    setError(email, '잘못된 이메일 형식입니다.');
  } else {
    setSuccess(email);
  }
};

const validateNickname = () => {
  const nicknameValue = nickname.value.trim();
  if (nicknameValue === '') {
    setError(nickname, '닉네임을 입력해주세요.');
  } else {
    setSuccess(nickname);
  }
};

const validatePassword = () => {
  const passwordValue = password.value.trim();
  if (passwordValue === '') {
    setError(password, '비밀번호를 입력해주세요.');
  } else if (passwordValue.length < 8) {
    setError(password, '비밀번호를 8자 이상 입력해주세요');
  } else {
    setSuccess(password);
  }
};

const validatePasswordConfirmation = () => {
  const passwordValue = password.value.trim();
  const passwordConfirmValue = passwordConfirm.value.trim();
  if (passwordConfirmValue === '') {
    setError(passwordConfirm, '비밀번호를 입력해주세요.');
  } else if (passwordConfirmValue !== passwordValue) {
    setError(passwordConfirm, '비밀번호가 일치하지 않습니다.');
  } else {
    setSuccess(passwordConfirm);
  }
};

const setSubmitButtonState = () => {
  const currentPage = window.location.pathname;

  let isValid = '';
  if (currentPage.includes('login.html')) {
    isValid =
      email.value.trim() !== '' &&
      isValidEmail(email.value.trim()) &&
      password.value.trim() !== '' &&
      password.value.trim().length >= 8;
  } else if (currentPage.includes('signup.html')) {
    isValid =
      email.value.trim() !== '' &&
      isValidEmail(email.value.trim()) &&
      nickname.value.trim() !== '' &&
      password.value.trim() !== '' &&
      password.value.trim().length >= 8 &&
      passwordConfirm.value.trim() !== '' &&
      passwordConfirm.value.trim() === password.value.trim();
  }

  formButton.disabled = !isValid;
};
