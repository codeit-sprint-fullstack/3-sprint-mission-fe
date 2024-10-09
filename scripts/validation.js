import { USER_DATA } from '/scripts/constants/userData.js';
import { validityMessage } from '/scripts/constants/validityMessage.js';
import { showToast, showModal } from '/scripts/ui/component.js';

const wrapContainer = document.querySelector('#wrap');
const signupForm = document.querySelector('form#signup');
const loginForm = document.querySelector('form#login');
const emailInput = document.querySelector('input[name="email"]');
const nicknameInput = document.querySelector('input[name="nickname"]');
const containers = document.querySelectorAll('.password-container');
const passwordInput = document.querySelector('input[name="password"]');
const confirmInput = document.querySelector('input[name="password-confirm"]');
const pwToggleButtons = document.querySelectorAll('.password-toggle');

const validateEmail = event => {
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
  emailInput.classList.toggle('user-invalid', !isValid);

  if (!emailInput.value) showToast(emailInput, validityMessage.emailIsEmpty);
  if (!emailInput.validity.valid) showToast(emailInput, validityMessage.invalidEmail);
};

const validateNickname = event => {
  const nickname = nicknameInput.value;
  const nicknameRegex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,16}$/;
  const isValid = nicknameRegex.test(nickname);

  nicknameInput.setCustomValidity(isValid ? '' : validityMessage.invalidNickname);
  nicknameInput.setAttribute('data-invalid', !isValid);
  nicknameInput.classList.toggle('user-invalid', !isValid);

  if (!isValid) showToast(nicknameInput, validityMessage.invalidNickname);
};

const togglePassword = () => {
  containers.forEach(container => {
    const input = container.querySelector('input[type="password"], input[type="text"]');
    const img = container.querySelector('.password-toggle img');
    const isPassword = input.type === 'password';

    input.type = isPassword ? 'text' : 'password';
    img.src = isPassword ? '/images/login/eye.svg' : '/images/login/eye.slash.svg';
    img.alt = isPassword ? '비밀번호 숨기기' : '비밀번호 표시';
  });
};

const isPasswordValid = password => password && password.length >= 8;

const validatePasswords = event => {
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
};

const handleSignupSubmit = event => {
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
    // 로그인 성공 시 1초 후 로그인 페이지로 이동
    location.href = '/login';
  }, 1000);
};

const handleLoginSubmit = event => {
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
};

signupForm?.addEventListener('submit', handleSignupSubmit);
loginForm?.addEventListener('submit', handleLoginSubmit);
emailInput.addEventListener('focusout', validateEmail);
// 로그인 페이지에는 닉네임 입력이 없으므로 Optional Chaining 사용
nicknameInput?.addEventListener('focusout', validateNickname);
passwordInput.addEventListener('focusout', validatePasswords);
// 비밀번호 확인 입력 시 비밀번호 validation
confirmInput?.addEventListener('input', validatePasswords);
pwToggleButtons.forEach(button => button.addEventListener('click', togglePassword));
