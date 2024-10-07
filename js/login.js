document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const loginBtn = document.querySelector('.loginPageLoginBtn');
  const emailErrorMessage = document.querySelector('.email-error-message');
  const passwordErrorMessage = document.querySelector('.password-error-message');

  function setError(inputElement, messageElement, message) {
    messageElement.textContent = message;
    inputElement.style.borderColor = message ? 'red' : '';
  }

  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailInput.value) {
      setError(emailInput, emailErrorMessage, "이메일을 입력해주세요.");
      return false;
    } else if (!emailPattern.test(emailInput.value)) {
      setError(emailInput, emailErrorMessage, "잘못된 이메일 형식입니다.");
      return false;
    } else {
      setError(emailInput, emailErrorMessage, "");
      return true;
    }
  }

  function validatePassword() {
    if (!passwordInput.value) {
      setError(passwordInput, passwordErrorMessage, "비밀번호를 입력해주세요.");
      return false;
    } else if (passwordInput.value.length < 8) {
      setError(passwordInput, passwordErrorMessage, "비밀번호를 8자 이상 입력해주세요.");
      return false;
    } else {
      setError(passwordInput, passwordErrorMessage, "");
      return true;
    }
  }                     

  function toggleLoginButton() {
    if (validateEmail() && validatePassword()) {
      loginBtn.style.backgroundColor = '#3692FF';
      loginBtn.removeAttribute('disabled');
    } else {
      loginBtn.style.backgroundColor = '#9ca3af';
      loginBtn.setAttribute('disabled', true);
    }
  }

  [emailInput, passwordInput].forEach(input => {
    input.addEventListener('focusout', () => {
      toggleLoginButton();
    });
  });

  loginBtn.addEventListener('click', (e) => {
    if (!loginBtn.hasAttribute('disabled')) {
      window.location.href = "/items";
    } else {
      e.preventDefault();
    }
  });
});
