// 비밀번호 토글
document.querySelectorAll('.toggle-password').forEach(function (button) {
  button.addEventListener('click', function () {
    const passwordInput = this.parentElement.querySelector('input[type="password"], input[type="text"]');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    this.querySelector('img').alt = type === 'password' ? '토글패스워드' : '비밀번호 숨기기';
  });
});

// 이메일, 비밀번호, 비밀번호 확인 유효성 검사 및 회원가입 버튼 활성화
function validateForm() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('passwordConfirm');
  const registerButton = document.querySelector('.register-btn');

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('passwordConfirmError');

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let isValid = true;

  // 이메일 유효성 검사
  if (!emailValue) {
    emailInput.classList.add('error');
    emailError.textContent = '이메일을 입력해주세요.';
    emailError.style.visibility = 'visible';
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailInput.classList.add('error');
    emailError.textContent = '잘못된 이메일 형식입니다.';
    emailError.style.visibility = 'visible';
    isValid = false;
  } else {
    emailInput.classList.remove('error');
    emailError.style.visibility = 'hidden';
  }

  // 비밀번호 유효성 검사
  if (!passwordValue) {
    passwordInput.classList.add('error');
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordError.style.visibility = 'visible';
    isValid = false;
  } else if (passwordValue.length < 8) {
    passwordInput.classList.add('error');
    passwordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
    passwordError.style.visibility = 'visible';
    isValid = false;
  } else {
    passwordInput.classList.remove('error');
    passwordError.style.visibility = 'hidden';
  }

  // 비밀번호 확인 유효성 검사
  if (!confirmPasswordValue) {
    confirmPasswordInput.classList.add('error');
    confirmPasswordError.textContent = '비밀번호 확인을 입력해주세요.';
    confirmPasswordError.style.visibility = 'visible';
    isValid = false;
  } else if (passwordValue !== confirmPasswordValue) {
    confirmPasswordInput.classList.add('error');
    confirmPasswordError.textContent = '비밀번호가 일치하지 않습니다.';
    confirmPasswordError.style.visibility = 'visible';
    isValid = false;
  } else {
    confirmPasswordInput.classList.remove('error');
    confirmPasswordError.style.visibility = 'hidden';
  }

  // 회원가입 버튼 활성화/비활성화
  registerButton.disabled = !isValid;
  if (isValid) {
    registerButton.classList.add('active');
  } else {
    registerButton.classList.remove('active');
  }
}

// 각 필드에 유효성 검사 이벤트 추가
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('password').addEventListener('input', validateForm);
document.getElementById('passwordConfirm').addEventListener('input', validateForm);

// 회원가입 버튼 클릭 시 조건 확인 후 페이지 이동
document.querySelector('.register-btn').addEventListener('click', function () {
  const registerButton = document.querySelector('.register-btn');

  // 버튼이 활성화되어 있을 때만 이동
  if (!registerButton.disabled) {
    window.location.href = '/items'; // '/items'로 페이지 이동
  }
});


// 유저 데이터베이스
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' }
];



// 회원가입 처리 함수
function handleSignup() {
  // 폼 입력 값 가져오기
  const emailInput = document.getElementById('email').value.trim();
  const nicknameInput = document.getElementById('nickname').value.trim();
  const passwordInput = document.getElementById('password').value.trim();
  const confirmPasswordInput = document.getElementById('passwordConfirm').value.trim();

  // 이메일 중복 체크
  const isEmailTaken = USER_DATA.some(user => user.email === emailInput);

  if (isEmailTaken) {
    // 이메일이 이미 존재하는 경우
    openModal('사용 중인 이메일입니다');
  } else if (passwordInput !== confirmPasswordInput) {
    // 비밀번호 확인이 일치하지 않는 경우
    openModal('비밀번호가 일치하지 않습니다.');
  } else if (passwordInput.length < 8) {
    // 비밀번호가 8자 이상이 아닌 경우
    openModal('비밀번호는 8자 이상이어야 합니다.');
  } else {
    // 회원가입 성공 처리
    // 새로운 유저 데이터 추가 (가짜로 처리)
    USER_DATA.push({ email: emailInput, password: passwordInput });

    // 성공 메시지 표시 및 로그인 페이지로 이동
    openModal('회원가입이 성공적으로 처리되었습니다');

    window.location.href = '/login'; // 로그인 페이지로 이동
  }
}

// 모달 요소 가져오기
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.querySelector('.close-modal-btn');

// 모달 열기 함수
function openModal(message) {
  modalMessage.textContent = message; // 전달된 메시지를 모달에 표시
  modal.style.display = 'block'; // 모달을 보이게 설정
}

// 모달 닫기 함수
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});


// 회원가입 버튼 클릭 시 실행
document.querySelector('.register-btn').addEventListener('click', handleSignup);

