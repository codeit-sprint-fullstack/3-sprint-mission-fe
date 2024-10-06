/**
 * @Goals 구현해야 하는 것
 * [ ] 이메일 입력 빈칸 검증
 * [ ] 이메일 형식 검증
 * [ ] 비밀번호 입력 빈칸 검증
 * [ ] 비밀번호 확인 입력 빈칸 검증
 * [ ] 비밀번호 일치 검증
 * [ ] 비밀번호 8자리 이상 검증
 * [ ] 닉네임 입력 빈칸 검증
 * [ ] 닉네임 2~16자리 검증
 */

const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' },
];

document.addEventListener('DOMContentLoaded', () => {
  const wrapContainer = document.querySelector('#wrap');
  const emailInput = document.querySelector('input[name="email"]');
  const nicknameInput = document.querySelector('input[name="nickname"]');
  const containers = document.querySelectorAll('.password-container');
  const passwordInput = document.querySelector('input[name="password"]');
  const confirmInput = document.querySelector('input[name="password-confirm"]');
  const toggleButtons = document.querySelectorAll('.password-toggle');
  const allInputs = document.querySelectorAll('input');
  const signupForm = document.querySelector('form#signup');
  const loginForm = document.querySelector('form#login');
  const validityMessage = {
    badInput: `잘못된 입력입니다.`,
    patternMismatch: `패턴에 맞게 입력하세요`,
    rangeOverflow: `범위를 초과하였습니다`,
    rangeUnderflow: `범위에 미달하였습니다`,
    stepMismatch: `간격에 맞게 입력하세요`,
    tooLong: `입력이 너무 깁니다 최대 길이에 맞게 입력하세요`,
    tooShort: `입력이 너무 짧습니다 최소 길이 이상으로 입력하세요`,
    typeMismatch: `형식에 맞게 입력하세요`,
    valueMissing: `이 필드는 필수입니다 반드시 입력하세요`,
    emailIsEmpty: `이메일을 입력해주세요.`,
    invalidEmail: `잘못된 이메일 형식입니다.`,
    emailIsExist: `사용 중인 이메일입니다.`,
    nicknameIsEmpty: `닉네임을 입력해주세요.`,
    nicknamePatternMismatch: `닉네임은 한글, 영문, 숫자로 2~16자 사이로 입력하세요`,
    passwordIsEmpty: `비밀번호를 입력해주세요.`,
    passwordIsTooShort: `비밀번호를 8자리 이상 입력해주세요.`,
    passwordIsNotMatch: `비밀번호가 일치하지 않습니다.`,
    wrongPassword: `이메일 또는 비밀번호가 일치하지 않습니다.`,
    signupSuccess: `회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.`,
  };
  let isToastShow = false;
  let isPasswordValidationPassed = false;

  signupForm?.addEventListener('submit', event => {
    event.preventDefault();
    const email = emailInput.value;
    const nickname = nicknameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;
    // const user = USER_DATA.find(user => user.email === email && user.password === password);
    const user = USER_DATA.find(user => user.email === email);
    if (user) {
      showModal(validityMessage.emailIsExist);
      emailInput.focus();
      return false;
    } else if (password !== confirmPassword) {
      showModal(validityMessage.passwordIsNotMatch);
      passwordInput.focus();
      return false;
    }

    // TODO: HTTP 응답(Response)을 줄 수 있는 서버(백엔드) API가 없는 상태이므로 action 대신 /login 페이지 이동으로 처리함, 추후 백엔드 구현 시 변경해야 함
    showModal(validityMessage.signupSuccess);
    setTimeout(() => {
      location.href = '/login';
    }, 1000);
  });
  loginForm?.addEventListener('submit', event => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const user = USER_DATA.find(user => user.email === email && user.password === password);
    // 모든 로직 검사
    preventFormSubmission();
    validateEmail();
    validatePasswords();
    if (!user) {
      showModal(validityMessage.wrongPassword);
      emailInput.focus();
      return false;
    }
    // TODO: HTTP 응답(Response)을 줄 수 있는 서버(백엔드) API가 없는 상태이므로 action 대신 /items 페이지 이동으로 처리함, 추후 백엔드 구현 시 변경해야 함
    location.href = '/items';
  });

  function getMessage(validity) {
    for (const key in validityMessage) {
      if (validity[key]) {
        // 일단 닉네임만 따로 처리
        if (key === 'patternMismatch') {
          return `닉네임은 2~16자 사이로 입력하세요`;
        } else {
          return validityMessage[key];
        }
      }
    }
  }

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
    console.log(`target: ${target.name}, message: ${message}`);
    // if (targetState.target.isToastShow) return;
    // if (isToastShow) return;
    // isToastShow = true;

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.opacity = 0;
    target.after(toast);

    // Fade in
    setTimeout(() => {
      toast.style.opacity = 1;
    }, 0);

    setTimeout(() => {
      // Fade out
      toast.style.opacity = 0;

      setTimeout(() => {
        isToastShow = false;
        toast.remove();
      }, 250);
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
    const email = emailInput.value;
    const emailRegex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
    );
    const domainParts = email?.split('@')[1]?.split('.');

    const isValidFormat = emailRegex.test(email);
    const hasValidDomain = domainParts && domainParts.length > 1 && domainParts.every(part => part.length > 0);
    const isValid = isValidFormat && hasValidDomain;

    emailInput.setCustomValidity(isValid ? '' : validityMessage.invalidEmail);
    emailInput.toggleAttribute('data-invalid', !isValid);
    emailInput.classList.toggle('user-invalid', !isValid);
  }

  function validateNickname() {
    const nickname = nicknameInput.value;
    const nicknameRegex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,16}$/;
    const isValid = nicknameRegex.test(nickname);

    nicknameInput.setCustomValidity(isValid ? '' : validityMessage.nicknamePatternMismatch);
    nicknameInput.toggleAttribute('data-invalid', !isValid);
    nicknameInput.classList.toggle('user-invalid', !isValid);

    if (!isValid) showToast(nicknameInput, validityMessage.nicknamePatternMismatch);
  }

  function preventFormSubmission(event) {
    event?.preventDefault();
    validateEmail();
    // 이메일이 비어있는 경우
    if (!emailInput.value) {
      showToast(emailInput, validityMessage.emailIsEmpty);
      // 이메일 형식이 잘못된 경우
    } else if (!emailInput.validity.valid) {
      showToast(emailInput, validityMessage.invalidEmail);
    }
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

  function validatePasswords() {
    // 비밀번호 확인 input이 존재하는지 확인
    const isConfirmInputExist = !!confirmInput;

    // 비밀번호와 비밀번호 확인 input이 모두 존재하고 두 값이 일치하지 않는 경우, 둘 다 data-invalid 속성 추가
    const isValid = !isConfirmInputExist || passwordInput.value === confirmInput.value;
    const hasValue = passwordInput.value && (!isConfirmInputExist || confirmInput.value);

    passwordInput.toggleAttribute('data-invalid', hasValue && !isValid);
    confirmInput?.toggleAttribute('data-invalid', hasValue && !isValid);

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

  emailInput.addEventListener('focusout', preventFormSubmission);
  // 로그인 페이지에는 닉네임 입력이 없으므로 Optional Chaining 사용
  nicknameInput?.addEventListener('focusout', validateNickname);
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => togglePassword(containers));
  });
  passwordInput.addEventListener('input', validatePasswords);
  passwordInput.addEventListener('focusout', validatePasswords);
  confirmInput?.addEventListener('input', validatePasswords);
});
