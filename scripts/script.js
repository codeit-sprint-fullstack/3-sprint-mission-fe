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
});

passwordClearBtn.addEventListener('click', () => {
  passwordInput.value = '';
  passwordClearBtn.style.display = 'none';
  showPasswordBtn.style.display = 'none';
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