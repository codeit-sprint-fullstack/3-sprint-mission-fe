//비밀번호 토글 버튼
document.querySelector('.toggle-password').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  this.querySelector('img').alt = type === 'password' ? '토글패스워드' : '비밀번호 숨기기';
});

//이메일 입력 칸 
document.getElementById('email').addEventListener('focusout', function() {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('emailError');
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
      emailInput.classList.add('error');
      errorMessage.textContent = '이메일을 입력해주세요.';
      errorMessage.style.visibility = 'visible';
  } else if (!emailPattern.test(emailValue)) {
      emailInput.classList.add('error');
      errorMessage.textContent = '잘못된 이메일 형식입니다.';
      errorMessage.style.visibility = 'visible';
  } else {
      emailInput.classList.remove('error');
      errorMessage.style.visibility = 'hidden';
  }
});

//비밀번호 입력 칸
document.getElementById('password').addEventListener('focusout', function() {
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('passwordError');
  const passwordValue = passwordInput.value.trim();

 // 비밀번호의 최소 길이를 검사 (8자 이상)
 if (passwordValue === "") {
  passwordInput.classList.add('error');
  errorMessage.textContent = '비밀번호를 입력해주세요.';
  errorMessage.style.visibility = 'visible';
} else if (passwordValue.length < 8) {
  passwordInput.classList.add('error');
  errorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';
  errorMessage.style.visibility = 'visible';
} else {
  passwordInput.classList.remove('error');
  errorMessage.style.visibility = 'hidden';
}
});

function validateForm() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginButton = document.querySelector('.login-btn'); 
  
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  let isValid = true;

  // 이메일 유효성 검사
  if (emailValue === "") {
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
  if (passwordValue === "") {
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

  // 로그인 버튼 활성화/비활성화
  loginButton.disabled = !isValid;
}

// 이메일과 비밀번호 입력 필드에서 입력할 때마다 유효성 검사를 호출
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('password').addEventListener('input', validateForm);

// focusout 이벤트 시에도 유효성 검사 호출
document.getElementById('email').addEventListener('focusout', validateForm);
document.getElementById('password').addEventListener('focusout', validateForm);

// 로그인 버튼 클릭 이벤트 추가
document.querySelector('.login-btn').addEventListener('click', function() {
  const loginButton = document.querySelector('.login-btn'); // 클래스 선택자로 변경
  
  // 버튼이 활성화되어 있을 때만 이동
  if (!loginButton.disabled) {
      window.location.href = '/items'; // '/items'로 페이지 이동
  }
  });


  // 유저 데이터베이스 (이미 존재하는 이메일과 비밀번호)
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' }
];

// 로그인 처리 함수
function handleLogin() {
  const emailInput = document.getElementById('email').value.trim();
  const passwordInput = document.getElementById('password').value.trim();

  // 유저 데이터베이스에서 이메일과 비밀번호 찾기
  const user = USER_DATA.find(user => user.email === emailInput);

  if (!user) {
    // 이메일이 데이터베이스에 없는 경우
    openModal('비밀번호가 일치하지 않습니다.');
  } else if (user.password !== passwordInput) {
    // 이메일은 있지만 비밀번호가 틀린 경우
    openModal('비밀번호가 일치하지 않습니다.');
  } else {
    // 이메일과 비밀번호가 모두 일치하는 경우
    window.location.href = '/login'; // 페이지 이동
  }
}
// 모달 요소 가져오기
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const closeModalButton = document.querySelector('.close-modal-btn');

// 모달 열기 함수
function openModal(message) {
  modalMessage.textContent = message;
  modal.style.display = 'block'; // 모달을 보이게 설정
}

// 모달 닫기 함수 (확인 버튼 클릭 시)
closeModalButton.addEventListener('click', function () {
  modal.style.display = 'none';
});

// 배경 클릭으로 모달 닫기
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});




// 로그인 버튼 클릭 시 실행
document.querySelector('.login-btn').addEventListener('click', handleLogin);
