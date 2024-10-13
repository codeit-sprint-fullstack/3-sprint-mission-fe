document.addEventListener("DOMContentLoaded", function () {
  const userEmailInput = document.getElementById("userEmail");
  const userEmailError = document.getElementById("userEmail-error");
  const userEmailEmptyError = document.getElementById("userEmail-empty-error");

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");
  const passwordEmptyError = document.getElementById("password-empty-error");

  const loginButton = document.getElementById("login-button");

  const toggleButton = document.getElementById("toggle-password");

  //----------------------비밀번호 보기 토글-----------------------
  toggleButton.addEventListener("click", function () {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });
  //
  //
  //---------------------유효성 검증-------------------------

  // 이메일 형식 검증
  function checkEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // 비밀번호 _8자 이상
  function checkPassword(password) {
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

  // 이메일 입력 후 focusout 이벤트
  userEmailInput.addEventListener("focusout", function () {
    checkInput(userEmailInput, userEmailError, userEmailEmptyError, checkEmail);
  });

  // 비밀번호 입력 후 focusout 이벤트
  passwordInput.addEventListener("focusout", function () {
    checkInput(passwordInput, passwordError, passwordEmptyError, checkPassword);
  });
  //
  //
  //--------------------로그인 버튼 상태 업데이트 함수-------------------------
  function updateLoginButtonState() {
    const email = userEmailInput.value.trim();
    const password = passwordInput.value;

    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);

    // 모든 입력이 유효하고, 빈 값이 없을 때만 로그인 버튼 활성화
    if (email !== "" && password !== "" && isEmailValid && isPasswordValid) {
      loginButton.disabled = false;
      loginButton.classList.add("active");
    } else {
      loginButton.disabled = true;
      loginButton.classList.remove("active");
    }
  }
  //
  //
  //----------------------------로그인 DB-------------------------
  const USER_DATA = [
    { email: "codeit1@codeit.com", password: "codeit101!" },
    { email: "codeit2@codeit.com", password: "codeit202!" },
    { email: "codeit3@codeit.com", password: "codeit303!" },
    { email: "codeit4@codeit.com", password: "codeit404!" },
    { email: "codeit5@codeit.com", password: "codeit505!" },
    { email: "codeit6@codeit.com", password: "codeit606!" },
  ];

  //
  //
  //----------------------로그인 폼 제출 이벤트--------------------
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 방지

    const email = userEmailInput.value.trim();
    const password = passwordInput.value;

    // USER_DATA 배열에서 입력한 이메일을 가진 사용자 찾기
    const user = USER_DATA.find((user) => user.email === email);

    // 데이터베이스에서 이메일 확인
    if (user) {
      // 이메일이 존재하면 비밀번호 확인
      if (user.password === password) {
        customConfirm("로그인 성공").then(function () {
          window.location.href = "/items"; // "/items"로 이동
        });
      } else {
        customConfirm("비밀번호가 일치하지 않습니다.");
      }
    } else {
      //이메일이 없을 경우
      customConfirm("이메일 혹은 비밀번호를 확인해 주세요");
    }
  });
  //
  //
  //---------------------커스텀 모달 함수 정의-----------------
  function customConfirm(message) {
    // 대화 상자를 HTML 요소로 생성(동적)
    var confirmBox = document.createElement("div");
    confirmBox.setAttribute("class", "confirm-box");
    confirmBox.innerHTML = "<p>" + message + "</p>";

    var confirmButton = document.createElement("div");
    confirmButton.setAttribute("class", "confirm-button");
    confirmButton.innerHTML = "<button>확인</button>";

    confirmBox.appendChild(confirmButton);

    // HTML 요소를 body 요소의 하위 요소로 추가
    document.body.appendChild(confirmBox);

    // 모달창의 위치 중앙 설정 및 스타일 추가
    confirmBox.style.position = "fixed";
    confirmBox.style.top = "50%";
    confirmBox.style.left = "50%";
    confirmBox.style.transform = "translate(-50%, -50%)";
    confirmBox.style.zIndex = 999;

    // 배경을 회색으로 덮어서 모달 창을 띄웠을 때 다른 요소들을 클릭할 수 없도록 제어
    var overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");
    document.body.appendChild(overlay);
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.zIndex = "998";

    return new Promise(function (resolve) {
      //
      // 확인 버튼을 클릭했을 때 이벤트
      confirmButton.addEventListener("click", function () {
        // 확인 버튼을 눌렀을 때 resolve 메서드를 호출
        // 확인 버튼 클릭 시 모달과 오버레이 제거
        document.body.removeChild(confirmBox);
        document.body.removeChild(overlay);
        setTimeout(function () {
          resolve(true);
        }, 100);
      });
    });
  }
});
