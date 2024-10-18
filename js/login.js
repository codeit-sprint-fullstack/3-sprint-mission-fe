const emailInput = document.getElementById('signup-email');
const failMessageEmpty = document.querySelector('.FailMessageEmpty');
const failMessage1 = document.querySelector('.FailMessage');
const failMessage2 = document.querySelector('.FailMessage2');
const loginbutton = document.querySelector('.login-btn')
const loginform = document.getElementById('loginform')
// 이메일이 포커스 아웃 되었을 때 실행되는 함수

emailInput.addEventListener('focusout', function() {
  const emailValue = emailInput.value.trim();
  
  // 이메일 형식이 맞는지 확인하는 정규 표현식
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === '') {
    // 값이 없을 경우
    emailInput.classList.add('error-border'); // 빨간 테두리 추가 
    failMessageEmpty.style.display = 'block';  // "이메일을 입력해주세요." 메시지 표시
    failMessage1.style.display = 'block';       // 메시지 보여줄때는 block
    failMessage2.style.display = 'none';        // 메시지 안보여줄때는 none
  } else if (!emailPattern.test(emailValue)) {
    // 이메일이 정규식 조건을 만족하지 않을 경우
    emailInput.classList.add('error-border');
    failMessageEmpty.style.display = 'none';
    failMessage1.style.display = 'none';      // "이메일을 입력해주세요" 메시지 표시
    failMessage2.style.display = 'block';      // "잘못된 이메일 형식입니다" 메시지 표시
  } else {
    // 모든 조건이 맞으면 에러 메시지 숨기기
    emailInput.classList.remove('error-border');
    failMessageEmpty.style.display = 'none';
    failMessage1.style.display = 'none';
    failMessage2.style.display = 'none';
  }
});



const passwordInput = document.getElementById('signup-password')
const pushpassword = document.querySelector('.Failpassword')  // 빈 값일때 에러 메시지
const morepassword = document.querySelector('.Failpassword2') // 8자 이하일때 에러 메시지

passwordInput.addEventListener('focusout',function(){
  const passwordValue = passwordInput.value.trim();

  
  if (passwordValue === '') {
    passwordInput.classList.add('error-border');
    pushpassword.style.display = 'block';
    morepassword.style.display = 'none';
  } else if (passwordValue.length < 8) {
    passwordInput.classList.add('error-border');
    pushpassword.style.display = 'none';
    morepassword.style.display = 'block';
  
  } else  {
    // 모든 조건이 맞으면 에러 숨김
    passwordInput.classList.remove('error-border');
    pushpassword.style.display = 'none';
    morepassword.style.display = 'none';
  } 
  
});

//alert 출력 미션

const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
] //가상데이터들

const user = USER_DATA.find(user => user.email === emailValue); // 이메일 입력값과 데이터 베이스 안에 값을 비교하기 위한 변수

if (!user) {
  // 입력한 이메일이 데이터베이스에 없는 경우
  alert('입력하신 이메일이 존재하지 않습니다.');
} else if (user.password !== passwordValue) {
  // 이메일은 O 비밀번호 일치 X
  alert('비밀번호가 일치하지 않습니다.');
} else {
  // 이메일과 비밀번호 둘다 O
  window.location.href = '/items'; // 
}
;

