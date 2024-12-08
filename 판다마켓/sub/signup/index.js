
let emailInput = document.querySelector("#Email");
let passwordInput = document.querySelectorAll('.password_input');
let loginbtn = document.querySelector('.login_bt');
let nickName = document.querySelector('#name');
let btnVisibility = document.querySelectorAll('.btnVisibility img')

const createElement = (content, className, appendDomClass) => {
  let newSpan = document.createElement("span");
  newSpan.classList.add(className);
  newSpan.textContent = content;
  newSpan.style.color = "red";
  document.querySelector(appendDomClass).appendChild(newSpan);
};

const hideElement = (name) => {
  let element = document.querySelector(`.${name}`);
  if (element) {
    element.remove();
  }
};

function validateEmail(email) {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(email);
}


emailInput.addEventListener("blur", checkTargetValue);
function checkTargetValue(e) {
  let email = e.target.value;
  if (e.target.value.length >= 1) {
    e.target.style.border = "1px solid blue";
    hideElement("assd");
  }
  if (e.target.value.length === 0) {
    hideElement("assd");
    e.target.style.border = "1px solid red";
    createElement("이메일을 입력해주세요.", "assd", ".e_mail");
  } else {
    if (!validateEmail(email)) {
      hideElement("assd");
      e.target.style.border = "1px solid red";
      createElement("잘못된 이메일 형식입니다.", "assd", ".e_mail");
    } else {
      hideElement("assd");
    }
  }
}

nickName.addEventListener("blur", nickRetype);
function nickRetype(e) {
  hideElement("aaa");
  // let email = e.target.value;
  if (e.target.value.length === 0) {
    hideElement("aaa");
    e.target.style.border = "1px solid red";
    createElement("닉네임을 입력해주세요.", "aaa", ".e_mail.oo");
  }
}

for(let i = 0; i < passwordInput.length; i++){
  passwordInput[i].addEventListener("blur", passwordRetype);
  function passwordRetype(e) {
    
    let box = e.target.parentElement.parentElement;
    if(box.classList[1]){
        if(passwordInput[0].value === passwordInput[1].value){
            hideElement("passwordTxt2");
            e.target.parentElement.style.border = "1px solid blue";
        } else{
            hideElement("passwordTxt2");
            e.target.parentElement.style.border = "1px solid red";
            createElement("비밀번호가 일치하지 않습니다", "passwordTxt2", ".password.aa");
        }
    }else{
        if (e.target.value.length === 0) {
            hideElement("passwordTxt");
            e.target.parentElement.style.border = "1px solid red";
            createElement("비밀번호를 입력하세요", "passwordTxt", ".password");
        } else{
            if(e.target.value.length >=1 && e.target.value.length < 8){
              hideElement("passwordTxt");
              createElement("비밀번호를 8자 이상 입력하세요", "passwordTxt", ".password");
            }else{
              e.target.style.border = '1px solid blue'
              hideElement("passwordTxt");
            };
        }
    }
  } 
}




//FIX
for(let i=0; i<btnVisibility.length; i++) {
  btnVisibility[i].addEventListener('click',showPassword);
  function showPassword(e){
    e.preventDefault()
    const input =e.target.parentElement.parentElement.children[0]
    if (input.type ==='password') {
      input.type ='text';
      e.target.src="/판다마켓/img/visible.png"
    } 
    else  {
      input.type='password'
      e.target.src="/판다마켓/img/btn_hidden.png"
    }

    return;
  }
}


// loginbtn.addEventListener('mouseenter',() => {
//     let eamilError = document.querySelector('.assd');
//     let pwError= document.querySelector('.passwordTxt')

//     console.log('하냐?',passwordInput.value);

//   if(eamilError === null && pwError === null && 
//     emailInput.value.length !== 0 && passwordInput.value.length !== 0){
//     loginbtn.classList.add('login_bt_change')
//     }
    
//   if(eamilError !== null || pwError !== null
//     || !validateEmail(emailInput.value) || passwordInput.value.length < 8
//   ){
//     loginbtn.classList.remove('login_bt_change')
//   }
  
// })


let modal = document.querySelector('.modal_bg');
let modalCloseBtn = document.querySelector('.modal button');
modal.classList.add('hidden');
modalCloseBtn.addEventListener('click',closeModal);

function modalShow(){
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}
function closeModal(){
    modal.classList.add('hidden');
    modal.classList.remove('visible');
}

const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
]

function checkUserEmailInfo (user) {
    if (user.email === emailInput.value) return true 
    else return false
}

let correctUser = function(){
  return USER_DATA.some(checkUserEmailInfo) 
}


console.log('123',correctUser());



loginbtn.addEventListener('click',nobtn);
function nobtn(e){
    console.log('nnn')
  e.preventDefault();
  let existEmail = correctUser();
  console.log('existEmail',existEmail)
  if(existEmail) modalShow()
   
    if(emailInput.value.length === 0 || passwordInput[0].value.length === 0 
        || passwordInput[1].value.length === 0 || nickName.value.length === 0){
        alert('정보를 입력하세요')
    } else {
        alert('회원가입이 완료되었습니다.')
        window.location.href = '../login/index.html'
        // console.log('dhomm')
    }
  
}




