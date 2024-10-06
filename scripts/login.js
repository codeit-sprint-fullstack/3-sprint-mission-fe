// 클리어 버튼

// 이메일 input과 clear 버튼
const emailInput = document.querySelector('.input-id');
const emailClearBtn = document.getElementById('clear-btn-id');

// 비밀번호 input과 clear 버튼 (feat. show-pw 버튼)
const passwordInput = document.querySelector('.input-pw');
const passwordClearBtn = document.getElementById('clear-btn-pw');
const showPasswordBtn = document.querySelector('.show-pw');

// input 요소에 텍스트가 입력될 때마다 실행
emailInput.addEventListener('input', () => {
  if (emailInput.value.length > 0) {
    emailClearBtn.style.display = 'inline'; // Clear 버튼을 보여줌
  } else {
    emailClearBtn.style.display = 'none'; // Clear 버튼을 숨김
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length > 0) {
    passwordClearBtn.style.display = 'inline'; // clear-btn-pw 버튼을 보여줌
    showPasswordBtn.style.display = 'inline'; // show-pw 버튼을 보여줌
  } else {
    passwordClearBtn.style.display = 'none'; // clear-btn-pw 버튼을 숨김
    showPasswordBtn.style.display = 'none'; // show-pw 버튼을 숨김
  }
});

// Clear 버튼을 눌렀을 때 input을 비우고 버튼을 숨김
emailClearBtn.addEventListener('click', () => {
  emailInput.value = '';
  emailClearBtn.style.display = 'none';
  emailInput.classList.remove('alert'); // 클래스 제거
  emailAlert.textContent = "";
  goToLogin(); // 로그인 버튼 활성화 & 비활성화 
});

passwordClearBtn.addEventListener('click', () => {
  passwordInput.value = '';
  passwordClearBtn.style.display = 'none';
  showPasswordBtn.style.display = 'none';
  passwordInput.classList.remove('alert'); // 클래스 제거
  passwordAlert.textContent = "";
  goToLogin(); // 로그인 버튼 활성화 & 비활성화
});

// show-pw 버튼을 눌렀을 때 비밀번호 보이기/숨기기
showPasswordBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'; // 비밀번호를 보여줌
    showPasswordBtn.style.backgroundImage = "url('/assets/show-pw.png')"; // show-pw.png로 변경
  } else {
    passwordInput.type = 'password'; // 비밀번호를 숨김
    showPasswordBtn.style.backgroundImage = "url('/assets/hide-pw.png')"; // hide-pw.png로 변경
  }
});


// 이메일 유효성 검사
const emailAlert = document.querySelector('#label-alert-id');

function validateEmailInput(e) {
  const email = e.target.value; // 입력된 이메일 값 가져오기
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 형식 패턴

  // 입력 값이 비었을 때
  if (email === "") {
    e.target.classList.add('alert')// 빨간색 보더 클래스 추가
    emailAlert.textContent = "이메일을 입력해주세요.";
  }
  // 이메일 형식이 맞지 않을 때
  else if (!emailPattern.test(email)) {
    e.target.classList.add('alert');
    emailAlert.textContent = "잘못된 이메일 형식입니다.";
  }
  // 이메일 형식이 올바를 경우
  else {
    emailInput.classList.remove('alert'); // 클래스 제거
    emailAlert.textContent = ""; // 경고 메시지 지우기
  }
}

emailInput.addEventListener('focusout', validateEmailInput);

// 이메일 input focusout 후 다시 focusin 시 'input & 라벨' 내용변경
emailInput.addEventListener('input', function (e) {
  const email = e.target.value.trim(); // 입력된 이메일 값 가져오기
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 형식 패턴

  // 이메일을 입력해주세요 메시지가 있을 때
  if (emailAlert.textContent === "이메일을 입력해주세요.") {
    if (email.length >= 1) { // 한글자라도 입력되면
      e.target.classList.remove('alert'); // 빨간색 보더 클래스 제거
      emailAlert.textContent = "";
    }
  }
  // 잘못된 이메일 형식입니다 메시지가 있을 때
  else if (emailAlert.textContent === "잘못된 이메일 형식입니다.") {
    if (!emailPattern.test(email)) {
      e.target.classList.add('alert'); // 빨간색 보더 클래스 추가
      emailAlert.textContent = "잘못된 이메일 형식입니다.";
    } else if (emailPattern.test(email)) {
      e.target.classList.remove('alert'); // 클래스 제거
      emailAlert.textContent = ""; // 라벨 메시지 지우기
    }
  }
});




// 비밀번호 유효성 검사
const passwordAlert = document.querySelector('#label-alert-pw');

function validatePasswordInput(e) {
  const password = passwordInput.value.trim();

  if (password === "") {
    e.target.classList.add('alert')// 빨간색 보더 클래스 추가
    passwordAlert.textContent = "비밀번호를 입력해주세요.";
  } else if (password.length < 8) {
    e.target.classList.add('alert')// 빨간색 보더 클래스 추가
    passwordAlert.textContent = "비밀번호를 8자 이상 입력해주세요.";
  } else {
    passwordAlert.textContent = ""; // 8자이상일 때 라벨내용 지우기
    e.target.classList.remove('alert')// 빨간색 보더 클래스 제거
  }
}

passwordInput.addEventListener('focusout', validatePasswordInput);

// 패스워드 input focusout 후 다시 focusin 시 'input & 라벨' 내용변경
passwordInput.addEventListener('input', function (e) {
  const password = e.target.value.trim(); // 입력된 비밀번호 값 가져오기

  // 비밀번호를 입력해주세요 메시지가 있을 때
  if (passwordAlert.textContent === "비밀번호를 입력해주세요.") {
    if (password.length >= 1) { // 한글자라도 입력되면
      e.target.classList.remove('alert'); // 빨간색 보더 클래스 제거
      passwordAlert.textContent = "";
    }
  }
  // 비밀번호를 8자 이상 입력해주세요 메시지가 있을 때
  else if (passwordAlert.textContent === "비밀번호를 8자 이상 입력해주세요.") {
    if (password.length < 8) {
      e.target.classList.add('alert'); // 빨간색 보더 클래스 추가
      passwordAlert.textContent = "비밀번호를 8자 이상 입력해주세요.";
    } else if (password.length >= 8) {
      e.target.classList.remove('alert'); // 클래스 제거
      passwordAlert.textContent = ""; // 라벨 메시지 지우기
    }
  }
});



// 로그인버튼 활성화 & 비활성화
const loginButton = document.querySelector('.btn-login');

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// 비밀번호 유효성 검사 함수
function isValidPassword(password) {
  return password.length >= 8;
}

// 로그인 버튼 활성화 & 비활성화
function goToLogin(e) {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // 이메일과 비밀번호가 모두 유효할 때만 로그인 버튼 활성화
  const isEmailValid = isValidEmail(email);
  const isPasswordValid = isValidPassword(password);

  if (isEmailValid && isPasswordValid) {
    loginButton.classList.add('active');
  } else {
    loginButton.classList.remove('active');
  }
}

// 이벤트 리스너
emailInput.addEventListener('input', goToLogin);
passwordInput.addEventListener('input', goToLogin);



// 로그인 버튼 클릭 이벤트 핸들러
const form = document.querySelector('#login-form');

form.addEventListener('submit', function (e) {
  if (!loginButton.classList.contains('active')) {
    e.preventDefault(); // 비활성화된 버튼 클릭 시 기본 동작 방지
  } else {
    console.log('로그인 성공') //확인용 콘솔
    window.location.href = 'items.html'; // items 페이지로 이동
  }
});