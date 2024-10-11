import { USER_DATA } from "./userdata.js";

// 이메일 input과 clear 버튼
const emailInput = document.querySelector('#id');
const emailClearBtn = document.querySelector('#clear-btn-id');

// 닉네임 input과 clear 버튼
const nickInput = document.querySelector('#nick');
const nickClearBtn = document.querySelector('#clear-btn-nick');

// 비밀번호1 input과 clear 버튼 (feat. show-pw 버튼)
const passwordInput1 = document.querySelector('#pw1');
const passwordClearBtn1 = document.querySelector('#clear-btn-pw1');
const showPasswordBtn1 = document.querySelector('#show-pw1');

// 비밀번호2 input과 clear 버튼 (feat. show-pw 버튼)
const passwordInput2 = document.querySelector('#pw2');
const passwordClearBtn2 = document.querySelector('#clear-btn-pw2');
const showPasswordBtn2 = document.querySelector('#show-pw2');

// 비밀번호 확인 레이블 요소
const wrongPwLabel = document.querySelector('.wrong-pw');
const rightPwLabel = document.querySelector('.right-pw');


// input 요소에 텍스트가 입력될 때마다 실행
emailInput.addEventListener('input', () => {
  if (emailInput.value.length > 0) {
    emailClearBtn.style.display = 'inline';
  } else {
    emailClearBtn.style.display = 'none';
  }
});

nickInput.addEventListener('input', () => {
  if (nickInput.value.length > 0) {
    nickClearBtn.style.display = 'inline';
  } else {
    nickClearBtn.style.display = 'none';
  }
});

// passwordInput1에서 입력이 있을 때 비밀번호 일치 여부를 확인
passwordInput1.addEventListener('input', () => {
  if (passwordInput1.value.length > 0) {
    passwordClearBtn1.style.display = 'inline';
    showPasswordBtn1.style.display = 'inline';

    // 비밀번호 일치 여부 확인
    if (passwordInput2.value.length > 0) {
      if (passwordInput1.value === passwordInput2.value) {
        wrongPwLabel.style.display = 'none';
        rightPwLabel.style.display = 'inline';
      } else {
        rightPwLabel.style.display = 'none';
        wrongPwLabel.style.display = 'inline';
      }
    } else {
      // passwordInput2가 비어 있으면 라벨을 숨김
      wrongPwLabel.style.display = 'none';
      rightPwLabel.style.display = 'none';
    }
  } else {
    passwordClearBtn1.style.display = 'none';
    showPasswordBtn1.style.display = 'none';
    wrongPwLabel.style.display = 'none';
    rightPwLabel.style.display = 'none';
  }
});

// passwordInput2에서 입력이 있을 때 비밀번호 일치 여부를 확인
passwordInput2.addEventListener('input', () => {
  if (passwordInput2.value.length > 0) {
    passwordClearBtn2.style.display = 'inline';
    showPasswordBtn2.style.display = 'inline';

    // 비밀번호 일치 여부 확인
    if (passwordInput1.value.length > 0) {
      if (passwordInput1.value === passwordInput2.value) {
        wrongPwLabel.style.display = 'none';
        rightPwLabel.style.display = 'inline';
      } else {
        rightPwLabel.style.display = 'none';
        wrongPwLabel.style.display = 'inline';
      }
    } else {
      // passwordInput1이 비어 있으면 라벨을 숨김
      wrongPwLabel.style.display = 'none';
      rightPwLabel.style.display = 'none';
    }
  } else {
    passwordClearBtn2.style.display = 'none';
    showPasswordBtn2.style.display = 'none';
    wrongPwLabel.style.display = 'none';
    rightPwLabel.style.display = 'none';
  }
});

// Clear 버튼을 눌렀을 때 input을 비우고 버튼을 숨김
emailClearBtn.addEventListener('click', () => {
  emailInput.value = '';
  emailClearBtn.style.display = 'none';
  emailInput.classList.remove('alert'); // 클래스 제거
  emailAlert.textContent = "";
  goToSignup(); // 회원가입 버튼 활성화 & 비활성화 
});

nickClearBtn.addEventListener('click', () => {
  nickInput.value = '';
  nickClearBtn.style.display = 'none';
  nickInput.classList.remove('alert'); // 클래스 제거
  nickAlert.textContent = "";
  goToSignup(); // 회원가입 버튼 활성화 & 비활성화 
});

passwordClearBtn1.addEventListener('click', () => {
  passwordInput1.value = '';
  passwordClearBtn1.style.display = 'none';
  showPasswordBtn1.style.display = 'none';
  wrongPwLabel.style.display = 'none';
  rightPwLabel.style.display = 'none';
  passwordInput.classList.remove('alert'); // 클래스 제거
  passwordAlert.textContent = "";
  goToSignup(); // 회원가입 버튼 활성화 & 비활성화 
});

passwordClearBtn2.addEventListener('click', () => {
  passwordInput2.value = '';
  passwordClearBtn2.style.display = 'none';
  showPasswordBtn2.style.display = 'none';
  wrongPwLabel.style.display = 'none';
  rightPwLabel.style.display = 'none';
  passwordInput.classList.remove('alert'); // 클래스 제거
  passwordAlert.textContent = "";
  goToSignup(); // 회원가입 버튼 활성화 & 비활성화 
});


// show-pw1 버튼을 눌렀을 때 비밀번호 보이기/숨기기
showPasswordBtn1.addEventListener('click', () => {
  if (passwordInput1.type === 'password') {
    passwordInput1.type = 'text'; // 비밀번호를 보여줌
    passwordInput2.type = 'text'; // 비밀번호를 보여줌
    showPasswordBtn1.style.backgroundImage = "url('/assets/show-pw.png')"; // show-pw.png로 변경
    showPasswordBtn2.style.backgroundImage = "url('/assets/show-pw.png')"; // show-pw.png로 변경
  } else {
    passwordInput1.type = 'password'; // 비밀번호를 숨김
    passwordInput2.type = 'password'; // 비밀번호를 숨김
    showPasswordBtn1.style.backgroundImage = "url('/assets/hide-pw.png')"; // hide-pw.png로 변경
    showPasswordBtn2.style.backgroundImage = "url('/assets/hide-pw.png')"; // hide-pw.png로 변경
  }
});

// show-pw2 버튼을 눌렀을 때 비밀번호 보이기/숨기기
showPasswordBtn2.addEventListener('click', () => {
  if (passwordInput2.type === 'password') {
    passwordInput2.type = 'text'; // 비밀번호를 보여줌
    passwordInput1.type = 'text'; // 비밀번호를 보여줌
    showPasswordBtn2.style.backgroundImage = "url('/assets/show-pw.png')"; // show-pw.png로 변경
    showPasswordBtn1.style.backgroundImage = "url('/assets/show-pw.png')"; // show-pw.png로 변경
  } else {
    passwordInput2.type = 'password'; // 비밀번호를 숨김
    passwordInput1.type = 'password'; // 비밀번호를 숨김
    showPasswordBtn2.style.backgroundImage = "url('/assets/hide-pw.png')"; // dide-pw.png로 변경
    showPasswordBtn1.style.backgroundImage = "url('/assets/hide-pw.png')"; // dide-pw.png로 변경
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
  // 이메일이 이미 데이터베이스에 존재하는 경우
  else if (USER_DATA.some(data => data.email === email)) {
    e.target.classList.add('alert');
    emailAlert.textContent = "사용 중인 이메일입니다.";
    // alert("사용 중인 이메일입니다")
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
  // 사용 중인 이메일을 입력했을 때
  else if (USER_DATA.some(data => data.email === email)) {
    e.target.classList.add('alert'); // 빨간색 보더 클래스 추가
    emailAlert.textContent = "사용 중인 이메일입니다.";
  }
  // 사용 중인 이메일입니다 메시지가 있을 때
  else if (emailAlert.textContent === "사용 중인 이메일입니다.") {
    if (!USER_DATA.some(data => data.email === email)) {
      e.target.classList.remove('alert'); // 클래스 제거
      emailAlert.textContent = ""; // 라벨 메시지 지우기
    }
  }
});


// 닉네임 유효성 검사
const nickAlert = document.querySelector('#label-alert-nick');

function validateNickInput(e) {
  const nick = e.target.value; // 입력된 닉네임 값 가져오기

  // 입력 값이 비었을 때
  if (nick === "") {
    e.target.classList.add('alert')// 빨간색 보더 클래스 추가
    nickAlert.textContent = "닉네임을 입력해주세요.";
  }
  else {
    nickInput.classList.remove('alert'); // 클래스 제거
    nickAlert.textContent = ""; // 경고 메시지 지우기
  }
}

nickInput.addEventListener('focusout', validateNickInput);

// 닉네임 input focusout 후 다시 focusin 시 'input & 라벨' 내용변경
nickInput.addEventListener('input', function (e) {
  const nick = e.target.value.trim(); // 입력된 닉네임 값 가져오기

  // 닉네임을 입력해주세요 메시지가 있을 때
  if (nickAlert.textContent === "닉네임을 입력해주세요.") {
    if (nick.length >= 1) { // 한글자라도 입력되면
      e.target.classList.remove('alert'); // 빨간색 보더 클래스 제거
      nickAlert.textContent = "";
    }
  }
});


// 비밀번호1 유효성 검사
const passwordAlert1 = document.querySelector('#label-alert-pw1');

function validatePasswordInput1(e) {
  const password = e.target.value.trim();

  if (password === "") {
    e.target.classList.add('alert')// 빨간색 보더 클래스 추가
    passwordAlert1.textContent = "비밀번호를 입력해주세요.";
  } else if (password.length < 8) {
    e.target.classList.add('alert')// 빨간색 보더 클래스 추가
    passwordAlert1.textContent = "비밀번호를 8자 이상 입력해주세요.";
  } else {
    passwordAlert1.textContent = ""; // 8자이상일 때 라벨내용 지우기
    e.target.classList.remove('alert')// 빨간색 보더 클래스 제거
  }
}

passwordInput1.addEventListener('focusout', validatePasswordInput1);

// 패스워드 input focusout 후 다시 focusin 시 'input & 라벨' 내용변경
passwordInput1.addEventListener('input', function (e) {
  const password = e.target.value.trim(); // 입력된 비밀번호 값 가져오기

  // 비밀번호를 입력해주세요 메시지가 있을 때
  if (passwordAlert1.textContent === "비밀번호를 입력해주세요.") {
    if (password.length >= 1) { // 한글자라도 입력되면
      e.target.classList.remove('alert'); // 빨간색 보더 클래스 제거
      passwordAlert1.textContent = "";
    }
  }
  // 비밀번호를 8자 이상 입력해주세요 메시지가 있을 때
  else if (passwordAlert1.textContent === "비밀번호를 8자 이상 입력해주세요.") {
    if (password.length < 8) {
      e.target.classList.add('alert'); // 빨간색 보더 클래스 추가
      passwordAlert1.textContent = "비밀번호를 8자 이상 입력해주세요.";
    } else if (password.length >= 8) {
      e.target.classList.remove('alert'); // 클래스 제거
      passwordAlert1.textContent = ""; // 라벨 메시지 지우기
    }
  }
});

// 비밀번호2 유효성 검사
const passwordAlert2 = document.querySelector('#label-alert-pw2');

function validatePasswordInput2(e) {
  const password = e.target.value.trim();

  if (password === "") {
    e.target.classList.add('alert')// 빨간색 보더 클래스 추가
    passwordAlert2.textContent = "비밀번호를 입력해주세요.";
  } else if (password.length < 8) {
    e.target.classList.add('alert')// 빨간색 보더 클래스 추가
    passwordAlert2.textContent = "비밀번호를 8자 이상 입력해주세요.";
  } else {
    passwordAlert2.textContent = ""; // 8자이상일 때 라벨내용 지우기
    e.target.classList.remove('alert')// 빨간색 보더 클래스 제거
  }
}

passwordInput2.addEventListener('focusout', validatePasswordInput2);

// 패스워드 input focusout 후 다시 focusin 시 'input & 라벨' 내용변경
passwordInput2.addEventListener('input', function (e) {
  const password = e.target.value.trim(); // 입력된 비밀번호 값 가져오기

  // 비밀번호를 입력해주세요 메시지가 있을 때
  if (passwordAlert2.textContent === "비밀번호를 입력해주세요.") {
    if (password.length >= 1) { // 한글자라도 입력되면
      e.target.classList.remove('alert'); // 빨간색 보더 클래스 제거
      passwordAlert2.textContent = "";
    }
  }
  // 비밀번호를 8자 이상 입력해주세요 메시지가 있을 때
  else if (passwordAlert2.textContent === "비밀번호를 8자 이상 입력해주세요.") {
    if (password.length < 8) {
      e.target.classList.add('alert'); // 빨간색 보더 클래스 추가
      passwordAlert2.textContent = "비밀번호를 8자 이상 입력해주세요.";
    } else if (password.length >= 8) {
      e.target.classList.remove('alert'); // 클래스 제거
      passwordAlert2.textContent = ""; // 라벨 메시지 지우기
    }
  }
});




// 회원가입 버튼 활성화 & 비활성화
const signupButton = document.querySelector('.btn-signup');

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// 닉네임 유효성 검사 함수
function isValidNick(nick) {
  return nick.length >= 1;
}

// 비밀번호 유효성 검사 함수
function isValidPassword(password) {
  return password.length >= 8;
}

// 회원가입  버튼 활성화 & 비활성화
function goToSignup(e) {
  const email = emailInput.value.trim();
  const nick = nickInput.value.trim();
  const password1 = passwordInput1.value.trim();
  const password2 = passwordInput2.value.trim();

  // 이메일과 비밀번호가 모두 유효할 때만 로그인 버튼 활성화
  const isEmailValid = isValidEmail(email);
  const isNickValid = isValidNick(nick);
  const isPassword1Valid = isValidPassword(password1);
  const isPassword2Valid = isValidPassword(password2);

  // 비밀번호가 동일한지 체크
  const doPasswordsMatch = password1 === password2;

  // 입력한 이메일이 데이터베이스에 없는지 체크
  const doNotExists = !USER_DATA.some(data => data.email == email);

  if (isEmailValid && isNickValid && isPassword1Valid && isPassword2Valid && doPasswordsMatch && doNotExists) {
    signupButton.classList.add('active');
  } else {
    signupButton.classList.remove('active');
  }
}

// 이벤트 리스너
[emailInput, nickInput, passwordInput1, passwordInput2].forEach(element => {
  element.addEventListener('input', goToSignup);
});


// 로그인 버튼 클릭 이벤트 핸들러
const form = document.querySelector('#signup-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // 1. 비활성화된 버튼 클릭 시 기본 동작 방지, 2. 고정된 기본 페이지로 새로고침 되는 것 방지
  if (signupButton.classList.contains('active')) {
    console.log('로그인 성공') //확인용 콘솔
    window.location.href = 'login.html'; // login 페이지로 이동
  }
});