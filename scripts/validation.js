const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' },
];

const wrapContainer = document.querySelector('#wrap');
const signupForm = document.querySelector('form#signup');
const loginForm = document.querySelector('form#login');
const emailInput = document.querySelector('input[name="email"]');
const nicknameInput = document.querySelector('input[name="nickname"]');
const containers = document.querySelectorAll('.password-container');
const passwordInput = document.querySelector('input[name="password"]');
const confirmInput = document.querySelector('input[name="password-confirm"]');
const pwToggleButtons = document.querySelectorAll('.password-toggle');
const validityMessage = {
  emailIsEmpty: `이메일을 입력해주세요.`,
  invalidEmail: `잘못된 이메일 형식입니다.`,
  emailIsExist: `사용 중인 이메일입니다.`,
  nicknameIsEmpty: `닉네임을 입력해주세요.`,
  invalidNickname: `닉네임은 한글, 영문, 숫자로 2~16자 사이로 입력하세요`,
  passwordIsEmpty: `비밀번호를 입력해주세요.`,
  passwordIsTooShort: `비밀번호를 8자리 이상 입력해주세요.`,
  passwordIsNotMatch: `비밀번호가 일치하지 않습니다.`,
  wrongPassword: `이메일 또는 비밀번호가 일치하지 않습니다.`,
  signupSuccess: `회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.`,
};
let isToastShow = false;

function fadeIn(element) {
  element.classList.add('hide');
  setTimeout(() => {
    element.classList.add('show');
    element.classList.remove('hide');
  }, 0);
}

function fadeOut(element) {
  element.classList.add('hide');
  setTimeout(() => {
    element.remove();
  }, 500);
}

function showToast(target, message) {
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
}

function showModal(message) {
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
}

function validateEmail() {
  event.preventDefault();
  const email = emailInput.value;
  // RFC 5322 이메일 정규표현식
  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  const domainParts = email?.split('@')[1]?.split('.');

  const isValidFormat = emailRegex.test(email);
  const hasValidDomain = domainParts && domainParts.length > 1 && domainParts.every(part => part.length > 0);
  const isValid = isValidFormat && hasValidDomain;

  emailInput.setCustomValidity(isValid ? '' : validityMessage.invalidEmail);
  emailInput.setAttribute('data-invalid', !isValid);
  emailInput.classList.add('user-invalid', !isValid);

  if (!emailInput.value) showToast(emailInput, validityMessage.emailIsEmpty);
  if (!emailInput.validity.valid) showToast(emailInput, validityMessage.invalidEmail);
}

function validateNickname(event) {
  event.preventDefault();
  const nickname = nicknameInput.value;
  const nicknameRegex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,16}$/;
  const isValid = nicknameRegex.test(nickname);

  nicknameInput.setCustomValidity(isValid ? '' : validityMessage.invalidNickname);
  nicknameInput.setAttribute('data-invalid', !isValid);
  nicknameInput.classList.add('user-invalid', !isValid);

  if (!isValid) showToast(nicknameInput, validityMessage.invalidNickname);
}

function togglePassword(containers) {
  containers.forEach(container => {
    const input = container.querySelector('input[type="password"], input[type="text"]');
    const img = container.querySelector('.password-toggle img');
    const isPassword = input.type === 'password';

    input.type = isPassword ? 'text' : 'password';
    img.src = isPassword ? '/images/login/eye.svg' : '/images/login/eye.slash.svg';
    img.alt = isPassword ? '비밀번호 숨기기' : '비밀번호 표시';
  });
}

function isPasswordValid(password) {
  return password && password.length >= 8;
}

function validatePasswords(event) {
  event.preventDefault();
  // 비밀번호 확인 input이 존재하는지 확인
  const isConfirmInputExist = !!confirmInput;

  // 비밀번호와 비밀번호 확인 input이 모두 존재하고 두 값이 일치하지 않는 경우, 둘 다 data-invalid 속성 추가
  const isValid = !isConfirmInputExist || passwordInput.value === confirmInput.value;
  const hasValue = passwordInput.value && (!isConfirmInputExist || confirmInput.value);

  passwordInput.setAttribute('data-invalid', hasValue && !isValid);
  confirmInput?.setAttribute('data-invalid', hasValue && !isValid);

  if (!hasValue) {
    passwordInput.removeAttribute('data-invalid');
    confirmInput?.removeAttribute('data-invalid');
  }

  // 비밀번호 확인 input이 존재하지 않는 경우, 비밀번호만 검증
  const validations = [
    {
      condition: !passwordInput.value,
      input: passwordInput,
      message: validityMessage.passwordIsEmpty,
    },
    {
      condition: !isPasswordValid(passwordInput.value),
      input: passwordInput,
      message: validityMessage.passwordIsTooShort,
    },
    {
      condition: isConfirmInputExist && !confirmInput.value,
      input: confirmInput,
      message: validityMessage.passwordIsEmpty,
    },
    {
      condition: isConfirmInputExist && !isPasswordValid(confirmInput.value),
      input: confirmInput,
      message: validityMessage.passwordIsTooShort,
    },
    {
      condition: isConfirmInputExist && passwordInput.value !== confirmInput.value,
      input: confirmInput,
      message: validityMessage.passwordIsNotMatch,
    },
  ];

  // 조건, 입력값, 메세지 순서대로 순회하며 조건이 참일 경우 메세지를 띄우기
  for (const { condition, input, message } of validations) {
    if (condition) {
      showToast(input, message);
      break;
    }
  }
}

function handleSignupSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  const nickname = nicknameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmInput.value;
  const user = USER_DATA.find(user => user.email === email);
  validateEmail();
  validateNickname();
  validatePasswords();
  if (user) {
    showModal(validityMessage.emailIsExist);
    emailInput.focus();
    return false;
  } else if (password !== confirmPassword) {
    showModal(validityMessage.passwordIsNotMatch);
    passwordInput.focus();
    return false;
  }
  showModal(validityMessage.signupSuccess);
  setTimeout(() => {
    location.href = '/login';
  }, 1000);
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const user = USER_DATA.find(user => user.email === email && user.password === password);
  validateEmail();
  validatePasswords();
  if (!user) {
    showModal(validityMessage.wrongPassword);
    emailInput.focus();
    return false;
  }
  location.href = '/items';
}

signupForm?.addEventListener('submit', handleSignupSubmit);
loginForm?.addEventListener('submit', handleLoginSubmit);
emailInput.addEventListener('focusout', validateEmail);
// 로그인 페이지에는 닉네임 입력이 없으므로 Optional Chaining 사용
nicknameInput?.addEventListener('focusout', validateNickname);
passwordInput.addEventListener('focusout', validatePasswords);
// 비밀번호 확인 입력 시 비밀번호 validation
confirmInput?.addEventListener('input', validatePasswords);
pwToggleButtons.forEach(button => {
  button.addEventListener('click', () => togglePassword(containers));
});
