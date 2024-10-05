// 클리어 버튼

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
});

nickClearBtn.addEventListener('click', () => {
  nickInput.value = '';
  nickClearBtn.style.display = 'none';
});

passwordClearBtn1.addEventListener('click', () => {
  passwordInput1.value = '';
  passwordClearBtn1.style.display = 'none';
  showPasswordBtn1.style.display = 'none';
  wrongPwLabel.style.display = 'none';
  rightPwLabel.style.display = 'none';
});

passwordClearBtn2.addEventListener('click', () => {
  passwordInput2.value = '';
  passwordClearBtn2.style.display = 'none';
  showPasswordBtn2.style.display = 'none';
  wrongPwLabel.style.display = 'none';
  rightPwLabel.style.display = 'none';
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