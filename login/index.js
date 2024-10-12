// Selector
const body = document.querySelector('body');
const emailBox = document.querySelector('.inputEmail');
const emailInputBox = document.querySelector('#box')
const passwordBox = document.querySelector('.inputPassword');
const passwordInputBox = document.querySelector('#box1');
const loginButton = document.querySelector('.loginButton');
const script = document.querySelector('#script')

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

// email양식 확인
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
function emailValidChk(email) {
  if (pattern.test(email) === false) return false;
  else return true;
}

// inputEmail errorBorder & errorText
function errorEventBoxEmail(e) {
  // 입력 값이 없을 때
  if (emailValidChk(e.target.value) === true) return true

  if (e.target.value.length === 0) {
    createErrorMessageElement("이메일을 입력해주세요.", emailInputBox);
    e.target.classList.add('errorBox');
    setTimeout(() => {
      e.target.classList.remove('errorBox');
    }, 900)
    return;

  } else if (e.target.value.length > 0) {
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
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
]


function checkEmail(e) {
  if (emailValidChk(e.target.value) === false) return false;
  if (passwordInputBox.value.length > 8) return true;
}

function checkPassword(e) {
  if (e.target.value.length > 8) {
    if (emailValidChk(emailInputBox.value)) {
      loginButton.style.backgroundColor = 'var(--mainColor)';
    }
  }

  for(let a of USER_DATA){
    if(a.email === emailInputBox.value && a.password === e.target.value){
      const aTag = document.createElement('a');
      aTag.href = '/items';
      // a태그를 부모요소로 지정
      loginButton.parentNode.insertBefore(aTag, loginButton)
      aTag.appendChild(loginButton);
    }
  }

}

// checking login

function checkLoginButton() {
  let loginStatus = false;
  let errorMessage = '';

  for (let i = 0; i < USER_DATA.length; i++) {
    // false => 밑의 else 작동
    if (USER_DATA[i].email === emailInputBox.value || USER_DATA[i].password !== passwordInputBox.value) {
      errorMessage = '비밀번호가 일치하지 않습니다.'
    } else if (USER_DATA[i].email !== emailInputBox.value && USER_DATA[i].password === passwordInputBox.value) {
      errorMessage = '비밀번호가 일치하지 않습니다.'
    }
  }

  if (loginStatus === false) {  
    modalActivate(errorMessage)
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
