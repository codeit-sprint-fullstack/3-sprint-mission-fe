//유저 데이터
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

//자바스크립트 유효성 검사
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let passwordcheck = document.getElementById('passwordcheck').value;
let emailError = document.getElementById('emailError').value;
let passwordError = document.getElementById('passwordError').value;
let passwordcheckError = document.getElementById('passwordcheckError').value;
let submit = document.getElementById('submit').value;
let check = true;
let emailkey = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// let emailValue = emailInput.value;
// let passwordValue = passwordInput.value;

//이메일
email.addEventListener ('textInput', function() {  
  if (!emailkey.test(email.value)) {
    emailError.style.display = 'block';
  }else{
    document.getElementById('emailError').innerHTML = "";
    emailError.style.display = 'none';
  }
  loginbutton();
});

//비밀번호
password.addEventListener ('textInput', function() {  
  if (!password.text(password.value)) {
    passwordError.style.display = 'block';  
  }else{
    passwordError.style.display = 'none';
  }
  loginbutton();
});

//비밀번호 확인
passwordcheck.addEventListener ('textInput', function() {
  if (!password.value !== '' && passwordcheck.value !== '') {
    if (password.value === passwordcheck.value) {
      passwordcheckError.style.display = 'none';
    }else{
      passwordcheckError.style.display = 'block'; 
    }
  }
  loginbutton();
});

passwordcheck.addEventListener('textOnblur', function() {
  passwordcheck.style.display = 'none';
});

//회원가입 버튼
function signupbutton() {
  if(emailkey.test(email.value) &&
     password.value.length >= 8 &&
     passwordcheck.value.length >= 8) {
    submit.style.backgroundcolor = '#3692ff';
    // submit.style.borderRadius = '40px';
  }else{
    submit.style.backgroundcolor = '#9ca3af';
  }
};

submit.addEventListener('click', function(e) {
  e.preventDefault();

  let user = USER_DATA.find(user => user.email === (emailValue && passwordValue));
  let emailValue = emailInput.value;
  let passwordValue = passwordInput.value;

  if (user) {
    modalBackground.style.display = 'block';
  }else{
    alert('회원가입 성공!');
  }
});

modal_check.addEventListener('click', function() {
  modal_background.style.display = 'none';
  modal_background.style.zIndex = '998';
});

// function validateForm() {
//   // if(email === "" || password === "") {
//   //   alert("모든 필드는 필수입니다.");
//   //   return false;
//   // }

//   // email 유효성 검사하기
//   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //문자 전체 + @ + 문자 전체 + . + 문자 전체
//   if(!emailRegex.test(email)) {
//     document.getElementById('emailError').innerHTML = "잘못된 이메일 형식입니다.";
//     return false;
//   }else{
//     document.getElementById('emailError').innerHTML = "";
//   }
//   // return true;

//   // password 유효성 검사하기
//   if(password.length < 8) {
//     document.getElementById('passwordError').innerHTML = "비밀번호를 8자 이상 입력해주세요.";
//     return false;
//   }else{
//     document.getElementById('passwordError').innerHTML = "";
//   }

//   //모든 검사를 통과
//   if(check){
//     document.getElementById('emailError').innerHTML = "";
//     document.getElementById('passwordError').innerHTML = "";

//   setTimeout(() => {console.log("로그인 되었습니다.")}, 0);
//   return true;
//   }
// };
// // 로그인 버튼에 이벤트 리스너 추가
// document.getElementById('submit').addEventListener("click", validateForm);