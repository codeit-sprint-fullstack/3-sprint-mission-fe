document.addEventListener("DOMContentLoaded", function () {
  const userEmailInput = document.getElementById("userEmail");
  const userEmailError = document.getElementById("userEmail-error");
  const userEmailEmptyError = document.getElementById("userEmail-empty-error");

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");
  const passwordEmptyError = document.getElementById("password-empty-error");

  const checkPasswordInput = document.getElementById("ckeckPassword");
  const checkPasswordError = document.getElementById("ckeck-password-error");
  const checkPasswordEmptyError = document.getElementById(
    "ckeck-password-empty-error"
  );

  const signUpButton = document.getElementById("sign-up-button");

  const toggleButton = document.getElementById("toggle-password");

  //-----------------비밀번호 보기 토글-----------------
  toggleButton.addEventListener("click", function () {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });

  //-----------------비밀번호 확인 토글------------------

  toggleButton.addEventListener("click", function () {
    checkPasswordInput.type =
      checkPasswordInput.type === "password" ? "text" : "password";
  });

  //---비밀번호 확인-----
  function isMatch(password1, password2) {
    return password1 === password2;
  }

  //---------------------유효성 검증-------------------------

  // 이메일 형식 검증
  function checkEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // 비밀번호 _8자 이상
  function chechPassword(password) {
    return password.length >= 8;
  }

  //-----------공통 검증 로직을 처리하는 함수-----------
  function checkInput(inputField, errorMessage, emptyErrorMessage, isValid) {
    // isValid: 유효성 검증
    if (!inputField.value) {
      // 값이 없을 때
      errorMessage.classList.add("hide");
      emptyErrorMessage.classList.remove("hide");
      inputField.classList.add("input-error");
    } else if (!isValid(inputField.value)) {
      // 입력 값이 유효하지 않을 때
      errorMessage.classList.remove("hide");
      emptyErrorMessage.classList.add("hide");
      inputField.classList.add("input-error");
    } else {
      // 입력 값이 유효할 때
      errorMessage.classList.add("hide");
      emptyErrorMessage.classList.add("hide");
      inputField.classList.remove("input-error");
    }
    updateLoginButtonState(); // 로그인 버튼 상태 업데이트
  }
});
