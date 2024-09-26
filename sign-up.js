// 비밀번호
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("toggle-password-1")
    .addEventListener("click", function () {
      let passwordInput = document.getElementById("password");
      let icon = this;

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    });

  // 비밀번호 확인
  document
    .getElementById("toggle-password-2")
    .addEventListener("click", function () {
      let checkPasswordInput = document.getElementById("checkPassword");
      let icon = this;

      if (checkPasswordInput.type === "password") {
        checkPasswordInput.type = "text";
      } else {
        checkPasswordInput.type = "password";
      }
    });
});
