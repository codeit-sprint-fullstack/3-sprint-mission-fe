// errorBoxMessage
// Selector
const inputEmail = document.querySelector('.inputEmail');
const inputEmailBox = document.querySelector('#box');
const inputNickname = document.querySelector('.inputNickname');
const inputPassword = document.querySelector('.inputPassword');
const inputPasswordCheck = document.querySelector('.inputPasswordCheck');
const inputPasswordValue = document.querySelector('#box2');
const inputPasswordCheckValue = document.querySelector('#box3');
const signupButton = document.querySelector('.signupButton');

//addEventListener
inputEmail.children[1].addEventListener('focusout', errorEventBoxEmail);
inputNickname.children[1].addEventListener('focusout', errorEventBoxNickname);
inputPassword.children[1].addEventListener('focusout', errorEventBoxPassword);
inputPasswordCheck.children[1].addEventListener('focusout', errorEventBoxPasswordCheck);
signupButton.addEventListener('click', checkSignupButton);

// error message & boxBorder function
function createErrorMessageElement(errorMessage, elementer) {
  const errorText = document.createElement('div');
  errorText.classList.add('errorText');
  errorText.textContent = errorMessage;
  elementer.after(errorText);
  setTimeout(() => {
    errorText.remove();
  }, 1000)
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

  if (emailValidChk(e.target.value) === true) {

    return true;
  } else {
    e.target.classList.add('errorBox');

    setTimeout(() => {
      e.target.classList.remove('errorBox');
    }, 900)

    const errorMessaage = document.querySelector('.errorText');
    if (e.target.value.length === 0) {
      createErrorMessageElement("이메일을 입력해주세요.", inputEmail.children[1]);
      return false;
    }

    if (emailValidChk(e.target.value)) {
      errorMessaage.remove();
      return;
    } else {
      createErrorMessageElement("잘못된 이메일 형식입니다.", inputEmail.children[1]);
      return false;
    }

  }
}

// errorEventBoxNickname
function errorEventBoxNickname(e) {
  if (e.target.value.length === 0) {
    e.target.classList.add('errorBox');
    createErrorMessageElement("닉네임을 입력해주세요.", inputNickname.children[1]);
    setTimeout(() => {
      e.target.classList.remove('errorBox');
    }, 900)
    return;
  }
}

// inputPassword errorBorder & errorText
function errorEventBoxPassword(e) {

  setTimeout(() => {
    e.target.classList.remove('errorBox');
  }, 900)

  if (e.target.value.length === 0) {
    e.target.classList.add('errorBox');
    createErrorMessageElement("비밀번호를 입력해주세요.", inputPassword.children[1]);
    return;
  } else if (e.target.value.length < 8) {
    e.target.classList.add('errorBox');
    createErrorMessageElement("비밀번호를 8자 이상 입력해주세요.", inputPassword.children[1]);
    return;
  }
}

// inputPasswordCheck errorBorder & errorText
function errorEventBoxPasswordCheck(e) {
  if (e.target.value === inputPasswordValue.value) {
    return;
  } else {
    console.log(e.target.value, inputPasswordValue.value)
    createErrorMessageElement("비밀번호가 일치하지 않습니다.", inputPasswordCheck.children[1]);
    e.target.classList.add('errorBox');
    let errorMessaage = document.querySelector('.errorText');

    if (errorMessaage) {
      setTimeout(() => {
        e.target.classList.remove('errorBox');
      }, 900)
    }
  }
}

// signupButton activate
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
]

console.log(inputEmailBox.value)

function checkSignupButton(e) {

  for (let i = 0; i < USER_DATA.length; i++) {

    if (USER_DATA[i].email === inputEmailBox.value) {
      // 사용 중인 이메일입니다
      alert('사용 중인 이메일 입니다.')
      return;
    } else if(USER_DATA[i].email !== inputEmailBox.value ){
      // login 페이지로 이동
      const aTag = document.createElement('a');
      aTag.href = "/login";
      signupButton.parentNode.insertBefore(aTag, signupButton);
      aTag.appendChild(signupButton);
    }
  }
}
