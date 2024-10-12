// Selector
const body = document.querySelector('body');
const inputEmail = document.querySelector('.inputEmail');
const inputEmailBox = document.querySelector('#box');
const inputNickname = document.querySelector('.inputNickname');
const inputNicknameBox = document.querySelector('#box1');
const inputPassword = document.querySelector('.inputPassword');
const inputPasswordBox = document.querySelector('#box2');
const inputPasswordCheck = document.querySelector('.inputPasswordCheck');
const inputPasswordCheckBox = document.querySelector('#box3');
const signupButton = document.querySelector('.signupButton');

//addEventListener
inputEmailBox.addEventListener('focusout', errorEventBoxEmail);
inputNicknameBox.addEventListener('focusout', errorEventBoxNickname);
inputPasswordBox.addEventListener('focusout', errorEventBoxPassword);
inputPasswordCheckBox.addEventListener('focusout', errorEventBoxPasswordCheck);
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
  if (e.target.value === inputPasswordBox.value) {
    return;
  } else {
    console.log(e.target.value, inputPasswordBox.value)
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

function checkSignupButton() {

  for (let a of USER_DATA) {
    if (a.email === inputEmailBox.value) {
      // 사용 중인 이메일입니다
      modalActivate('사용 중인 이메일 입니다.')
      return;
    }

    if (a.email !== inputEmailBox.value) {
      // login 페이지로 이동
      const aTag = document.createElement('a');
      aTag.href = "/login";
      signupButton.parentNode.insertBefore(aTag, signupButton);
      aTag.appendChild(signupButton);
    }
  }
}

// 모달창
function modalActivate(message) {
  body.insertAdjacentHTML(
    "afterbegin",
    `<div id="modalBackground" style="z-index: 1; max-width:1920px; max-height:1080px;background-color: rgba(0, 0, 0, 70%); position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
    <div id="modal" style="width: 540px; height:250px; border-radius: 8px; background-color: #FFFFFF; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <p class="message" style="font-family: Pretendard; font-size: 16px; font-weight: 500; text-align: center; color:#1F2937;">${message}</p>
      <button class="modalButton" style="width:120px; height:48px; background-color: #3692FF; border-radius: 8px; border:none;font-family: Pretendard;font-size: 16px;font-weight: 600;line-height: 19.09px;text-align: center; color:#FFFFFF; position: relative; left: 188px; top: 53px; cursor:pointer">확인</button>
    </div>
  </div>` // HTML
  )
  const modalBackground = document.querySelector('#modalBackground');
  const modalButton = document.querySelector('.modalButton');
  modalButton.addEventListener('click', modalButtonActivate);

  function modalButtonActivate() {
    modalBackground.remove();
  }
}