
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const passwordRetypeInput = document.getElementById('password-retype');
const passwordRetypeError = document.getElementById('passwordRetypeError');


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


passwordInput.addEventListener('focusin', function() {
  passwordInput.classList.remove('error');
  passwordError.style.display = 'none';
});


passwordRetypeInput.addEventListener('focusout', function() {
  const passwordValue = passwordInput.value;
  const passwordRetypeValue = passwordRetypeInput.value;


  if (!passwordRetypeValue) {
    passwordRetypeInput.classList.add('error');
    passwordRetypeError.textContent = '비밀번호를 다시 입력해주세요.';
    passwordRetypeError.style.display = 'block';
  }

  else if (passwordRetypeValue.length < 8) {
    passwordRetypeInput.classList.add('error');
    passwordRetypeError.textContent = '8자리 이상 입력해주세요.';
    passwordRetypeError.style.display = 'block';
  }

  else if (passwordValue !== passwordRetypeValue) {
    passwordRetypeInput.classList.add('error');
    passwordRetypeError.textContent = '비밀번호가 일치하지 않습니다.';
    passwordRetypeError.style.display = 'block';
  }

  else {
    passwordRetypeInput.classList.remove('error');
    passwordRetypeError.style.display = 'none';
  }
});


passwordRetypeInput.addEventListener('focusin', function() {
  passwordRetypeInput.classList.remove('error');
  passwordRetypeError.style.display = 'none';
});


//버튼 토글
const passwordToggleButtons = document.querySelectorAll('.password-toggle-button');

passwordToggleButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const passwordInput = this.parentElement.querySelector('input[type="password"], input[type="text"]');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.querySelector('img').alt = type === 'password' ? '비밀번호 보이는 상태 아이콘' : '비밀번호 숨긴 상태 아이콘';
  });
});


// function validateEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }


// const emailInput = document.getElementById('email');
// const emailError = document.getElementById('emailError');

// emailInput.addEventListener('focusout', function() {
//   const emailValue = emailInput.value;

//   if (!validateEmail(emailValue)) {
//     emailInput.classList.add('error');
//     emailError.style.display = 'block';
//   } else {
//     emailInput.classList.remove('error');
//     emailError.style.display = 'none';
//   }
// });


// emailInput.addEventListener('focusin', function() {
//   emailInput.classList.remove('error');
//   emailError.style.display = 'none';
// });


// const username = document.querySelector("#username");
// const password = document.querySelector("#password");
// const passwordRetype = document.querySelector("#password-retype");
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