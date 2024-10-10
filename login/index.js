// Selector
const emailBox = document.querySelector('.inputEmail');
const emailInputBox = emailBox.children[2]; // 이걸 어떤 식으로 Select 해야하는지
const passwordBox = document.querySelector('.inputPassword');
const passwordInputBox = passwordBox.children[2];
const loginButton = document.querySelector('.loginButton');

// addEvent
emailInputBox.addEventListener('focusout', errorEventBoxEmail);
passwordInputBox.addEventListener('focusout', errorEventBoxPassword);
emailInputBox.addEventListener('input', checkEmail);
passwordInputBox.addEventListener('input', checkPassword);
loginButton.addEventListener('click', checkLoginButton);

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

// loginButton activate
function checkEmail(e) {
  if (emailValidChk(e.target.value) === false) {
    return false;
  } else {
    if (passwordInputBox.value.length > 8) return true;
  }
}

function checkPassword(e) {
  if (e.target.value.length > 8) {
    if (emailValidChk(emailInputBox.value)) {
      loginButton.style.backgroundColor = 'var(--mainColor)';
    }
    return true;
  } else {
    return false;
  }
}

// checking login
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
]

function checkLoginButton(e) {
  for (let i = 0; i < USER_DATA.length; i++) {
    if (USER_DATA[i].email === emailInputBox.value && USER_DATA[i].password === passwordInputBox.value) {
      // a태그 생성
      const aTag = document.createElement('a');
      aTag.href = '/items';
      // a태그를 부모요소로 지정
      loginButton.parentNode.insertBefore(aTag, loginButton)
      aTag.appendChild(loginButton);
      alert('로그인')
      return true;
    } else if (USER_DATA[i].email === emailInputBox.value || false) {
      alert('비밀번호가 틀렸습니다.')
      return false;
    } else {
      alert('비밀번호가 틀렸습니다.')
      return false;
    }
  }
}