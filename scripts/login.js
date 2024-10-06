document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.password-container');
  const toggleButtons = document.querySelectorAll('.password-toggle');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const confirmInput = document.querySelector('input[name="password-confirm"]');
  // const allInputs = document.querySelectorAll('input:not([type=email])');
  const allInputs = document.querySelectorAll('input');
  const validityMessage  = {
    badInput: `잘못된 입력입니다.`,
    patternMismatch: `패턴에 맞게 입력하세요`,
    rangeOverflow: `범위를 초과하였습니다`,
    rangeUnderflow: `범위에 미달하였습니다`,
    stepMismatch: `간격에 맞게 입력하세요`,
    tooLong: `입력이 너무 깁니다 최대 길이에 맞게 입력하세요`,
    tooShort: `입력이 너무 짧습니다 최소 길이 이상으로 입력하세요`,
    typeMismatch: `형식에 맞게 입력하세요`,
    valueMissing: `이 필드는 필수입니다 반드시 입력하세요`,
  };

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

  function validateEmail() {
    const email = emailInput.value;
    const emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    const domainParts = email.split('@')[1]?.split('.');

    const isValidFormat = emailRegex.test(email);
    const hasValidDomain = domainParts && domainParts.length > 1 && domainParts.every(part => part.length > 0);
    const isValid = isValidFormat && hasValidDomain;

    emailInput.setCustomValidity(isValid ? '' : '유효하지 않은 이메일 주소입니다.');
    emailInput.toggleAttribute('data-invalid', !isValid);
    emailInput.classList.toggle('user-invalid');
  }

  function preventFormSubmission(event) {
    validateEmail();
  }

  function showValidityMessage(input) {
    input.setCustomValidity(getMessage(input.validity) || '');
  }

  emailInput.addEventListener('input', validateEmail);
  emailInput.addEventListener('invalid', preventFormSubmission);

  allInputs.forEach(input => {
    input.addEventListener('invalid', () => showValidityMessage(input));
  });

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => togglePassword(containers));
  });

  passwordInput.addEventListener('input', validatePasswords);
  confirmInput?.addEventListener('input', validatePasswords);

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

  function validatePasswords() {
    const isValid = passwordInput.value === confirmInput?.value;
    const hasValue = passwordInput.value && confirmInput?.value;

    passwordInput.toggleAttribute('data-invalid', hasValue && !isValid);
    confirmInput?.toggleAttribute('data-invalid', hasValue && !isValid);

    if (!hasValue) {
      passwordInput.removeAttribute('data-invalid');
      confirmInput?.removeAttribute('data-invalid');
    }
  }
});
