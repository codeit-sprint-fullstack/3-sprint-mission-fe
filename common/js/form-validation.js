const form = document.getElementById('form');
const email = document.getElementById('email');
const nickname = document.getElementById('nickname');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const formButton = document.getElementById('form-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // 유효성 검사
  setSubmitButtonState();

  if (!formButton.disabled) {
    window.location.href = '/pages/auth/login/login.html'; // 페이지 이동
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

  validationHandlers[elementId]();
});

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
  const isValid =
    email.value.trim() !== '' &&
    isValidEmail(email.value.trim()) &&
    nickname.value.trim() !== '' &&
    password.value.trim() !== '' &&
    password.value.trim().length >= 8 &&
    passwordConfirm.value.trim() !== '' &&
    passwordConfirm.value.trim() === password.value.trim();

  formButton.disabled = !isValid;
};
