// Selector
const emailBox = document.querySelector('.inputEmail');
const emailInputBox = emailBox.children[2];
const passwordBox = document.querySelector('.inputPassword');
const passwordInputBox = passwordBox.children[2];
const loginButtn = document.querySelector('.loginButtn');

// addEvent
emailInputBox.addEventListener('focusout', errorEventBoxEmail);
passwordInputBox.addEventListener('focusout', errorEventBoxPassword);
emailInputBox.addEventListener('input', checkEmail);
passwordInputBox.addEventListener('input', checkPassword);

// errorBorder & errorText
function createErrorMessageElement(errorMessage, elementer) {
  const errorText = document.createElement('div');
  errorText.classList.add('errorText');
  errorText.textContent = errorMessage;
  elementer.after(errorText);
  setTimeout(() => {
    errorText.remove()
  }, 900)
}

// email형식 확인
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
function emailValidChk(email) {
  if (pattern.test(email) === false) {
    return false;
  }
  else { return true; }
}

// inputEmail errorBorder & errorText
function errorEventBoxEmail(e) {
  // 입력 값이 없을 때
  if (emailValidChk(e.target.value) === true) {
    return true;
  } else {

    if (e.target.value.length === 0) {
      createErrorMessageElement("이메일을 입력해주세요.", emailInputBox);
      e.target.classList.add('errorBox');
      setTimeout(() => {
        e.target.classList.remove('errorBox');
      }, 900)
      return;

    } else if (e.target.value.length > 0) {
      console.log(808)
      if (emailValidChk(e.target.value) === false) {
        e.target.classList.add('errorBox');
        createErrorMessageElement("이메일 형식이 아닙니다.", emailInputBox);
        setTimeout(() => {
          e.target.classList.remove('errorBox');
        }, 900)
        return;
      }
    }
  }
}

// inputPassword errorBorder & errorText
function errorEventBoxPassword(e) {
  if (e.target.value.length === 0) {
    e.target.classList.add('errorBox');
    createErrorMessageElement('비밀번호를 입력해주세요.', passwordInputBox);
    setTimeout(() => {
      e.target.classList.remove('errorBox');
    }, 900)
  } else if (e.target.value.length > 0 && e.target.value.length < 9) {
    e.target.classList.add('errorBox');
    createErrorMessageElement('비밀번호를 8자 이상 입력해주세요.', passwordInputBox);
    setTimeout(() => {
      e.target.classList.remove('errorBox');
    }, 900)
  }
}

// checkEmail & checkPassword
function checkEmail(e) {
  if (emailValidChk(e.target.value) === false) {
    return false;
  } else {
    return true;
  }
}

function checkPassword(e) {
  if (e.target.value.length > 8) {
    return true;
  } else {
    return false;
  }
}

if(checkEmail === true && checkPassword === true){
  () => {
    console.log(9999)
    loginButtn.style.backgroundColor= 'var(--mainColor)';
  }
}