/* 로그인 버튼 효과
{
  const emailInput = document.getElementById("userEmail");
  const passwordInput = document.getElementById("userPassword");
  const submitButton = document.getElementById("submit");

  function checkInputs() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email !== "" && password !== "") {
      submitButton.disabled = false;
      submitButton.classList.add("enabled");
    } else {
      submitButton.disabled = true;
      submitButton.classList.remove("enabled");
    }
  }
}
emailInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);
*/

/* 비밀번호 보기 아이콘 >> JQury
$(function () {
  $("#toggle-password").on("click", function () {
    let passwordInput = $("#password");
    let icon = $(this);

    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      icon.attr("src", "eye-icon-slash.png"); // 비밀번호 보이기 시 다른 아이콘
    } else {
      passwordInput.attr("type", "password");
      icon.attr("src", "eye-icon.png"); // 비밀번호 숨기기 시 기본 아이콘
    }
  });
});
*/

// 비밀번호 보기 아이콘
// DOMContentLoaded 이벤트가 발생하면 아래의 코드를 실행
document.addEventListener("DOMContentLoaded", function () {
  // "toggle-password" 아이디를 가진 요소에 클릭 이벤트 리스너 추가
  document
    .getElementById("toggle-password")
    .addEventListener("click", function () {
      // 비밀번호 입력 필드와 클릭한 아이콘 요소를 변수에 저장
      let passwordInput = document.getElementById("password");
      let icon = this;

      // 비밀번호 입력 필드의 타입(type)이 'password'인 경우
      if (passwordInput.type === "password") {
        // 입력 필드의 타입을 'text'로 변경하여 비밀번호를 표시
        passwordInput.type = "text";
        // 아이콘 이미지를 비밀번호가 보이는 상태로 변경 >> 다른 이미지 사용할 때 사용
        //icon.src = "css/eye-icon.png";
      } else {
        // 입력 필드의 타입을 'password'로 변경하여 비밀번호를 숨김
        passwordInput.type = "password";
        // 아이콘 이미지를 비밀번호가 숨겨진 상태로 변경
        //icon.src = "css/eye-icon.png";
      }
    });
});
