
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

emailInput.addEventListener('focusout', function() {
  const emailValue = emailInput.value;

  
  if (!emailValue) {
    emailInput.classList.add('error');
    emailError.textContent = '이메일을 입력해주세요.';
    emailError.style.display = 'block';
  } 
  
  else if (!validateEmail(emailValue)) {
    emailInput.classList.add('error');
    emailError.textContent = '잘못된 이메일 형식입니다.';
    emailError.style.display = 'block';
  } 
  
  else {
    emailInput.classList.remove('error');
    emailError.style.display = 'none';
  }
});


emailInput.addEventListener('focusin', function() {
  emailInput.classList.remove('error');
  emailError.style.display = 'none';
});


passwordInput.addEventListener('focusout', function() {
  const passwordValue = passwordInput.value;

  
  if (!passwordValue) {
    passwordInput.classList.add('error');
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordError.style.display = 'block';
  }
  
  else if (passwordValue.length < 8) {
    passwordInput.classList.add('error');
    passwordError.textContent = '8자리 이상 입력해주세요.';
    passwordError.style.display = 'block';
  }
  
  else {
    passwordInput.classList.remove('error');
    passwordError.style.display = 'none';
  }
});


const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];


function login(email, password) {
  const user = USER_DATA.find(user => user.email === email); 

 
  if (!user) {
    alert("등록된 이메일이 없습니다.");
  } else if (user.password !== password) { 
    alert("비밀번호가 일치하지 않습니다.");
  } else { 
    alert("로그인 성공!");
    window.location.href = "/items"; 
  }
}


document.getElementById('loginButton').addEventListener('click', function() {
  const emailInput = document.getElementById('email').value; 
  const passwordInput = document.getElementById('password').value; 
  login(emailInput, passwordInput); 
});



const passInput = document.getElementById('password'); 
const toggleButton = document.querySelector('.password-toggle-button img'); 


toggleButton.addEventListener('click', function() {
  console.log("비밀번호 토글 버튼 클릭됨");
  console.log("현재 비밀번호 타입:", passInput.type); 

  if (passInput.type === 'password') {
    passInput.type = 'text'; 
    toggleButton.src = 'secret.png'; 
    toggleButton.alt = '비밀번호 보이는 상태 아이콘';
  } else {
    passInput.type = 'password'; 
    toggleButton.src = 'secret.png'; 
    toggleButton.alt = '비밀번호 숨긴 상태 아이콘';
  }
});

// const username = document.querySelector("#username");
// const password = document.querySelector("#password");
// const button = document.querySelector("button");
// const successMessage = document.querySelector(".success-message");
// const failureMessage = document.querySelector(".failure-message");
// const mismatchMessage = document.querySelector(".mismatch-message");
// const requiredMessage = document.querySelector(".required-message");

// username.onkeyup = function(){ 
//   if(isMoreThan4Length(username.value)){
//       successMessage.classList.remove("hide");
//       failureMessage.classList.add("hide");
//   }
//   else{
//       failureMessage.classList.remove("hide");
//       successMessage.classList.add("hide");
//   }
// }

// function isMoreThan4Length(value){
//   return value.length >=4
// }

// passwordRetype.onkeyup = function(){
//   if(isMatch(password.value,passwordRetype.value)){
//       mismatchMessage.classList.add("hide");
//   }
//   else{
//       mismatchMessage.classList.remove("hide");
//   }
// }
// function isMatch(password1, password2){
//   if(password1===password2){
//       return true;
//   }
//   return false;
// }

// button.onclick = function(){
//   if(username.value !== "" && password.value !== "" && passwordRetype.value !== "" ){//메시지 숨기기
//       requiredMessage.classList.add("hide");
//   }
//   else{
//       requiredMessage.classList.remove("hide");}
// }