
let emailInput = document.querySelector("#Email");
let passwordInput = document.querySelector('#password');
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
    e.target.style.border = "none";
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




  passwordInput.addEventListener("blur", passwordRetype);
  function passwordRetype(e) {
    console.log(e);
    if (e.target.value.length === 0) {
      hideElement("passwordTxt");
      e.target.parentElement.style.border = "1px solid red";
      createElement("비밀번호를 입력하세요", "passwordTxt", ".password");
    } else{
      if(e.target.value.length >=1 && e.target.value.length < 8){
        e.target.style.border = '1px solid red'
        hideElement("passwordTxt");
        createElement("비밀번호를 8자 이상 입력하세요", "passwordTxt", ".password");
      }else{
        e.target.parentElement.style.border = 'none'
        hideElement("passwordTxt");
      };
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

let eamilError = document.querySelector('.assd');
let pwError= document.querySelector('.passwordTxt')

loginbtn.addEventListener('mouseenter',() => {
  if(eamilError === null && pwError === null && 
    emailInput.value.length !== 0 && passwordInput.value.length !== 0){
      loginbtn.classList.add('login_bt_change')
    }
    
  if(eamilError !== null || pwError !== null
    || !validateEmail(emailInput.value) || passwordInput.value.length < 8
  ){
    loginbtn.classList.remove('login_bt_change')
  }
  
})


const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
]

let correctEmail = function(){
  return USER_DATA.map(callback)
  function callback (user) {
    if (user.email === emailInput.value) {
      return true
    } else {
      return false
    }
  }
};

let correctPassword = function(){
  return USER_DATA.map(callback)
  function callback (user) {
    if (user.password === passwordInput.value){
      return true
    } else {
      return false
    }
  }
};

console.log('123',correctEmail());
console.log('ddd',correctPassword());

// let modal = document.createElement('div');
let modalAll = document.querySelector('.modal_bg');
let modalClose = document.querySelector('.modal button');
modalAll.classList.add('hidden');

modalClose.addEventListener('click',closeModal);

function modalShow(){
  modalAll.classList.remove('hidden');
  modalAll.classList.add('visible');
}
function closeModal(){
  modalAll.classList.add('hidden');
  modalAll.classList.remove('visible');
}

loginbtn.addEventListener('click',nobtn);
function nobtn(e){
  e.preventDefault();

  function a(){
    if (correctEmail().filter((arr)=> arr)[0]) {
      // console.log('아이디가 있어요')
      return true;
    } else {
      // console.log('아이디가 없어요')
    } 
    return;
  }
  function b(){
    if(correctPassword().filter((arr) => arr)[0]){
      // console.log('비밀번호가 있')
      return true;
    } else{
      // console.log('비밀번호 없')
    }
    return;
  }

  if(a(), b()){
    window.location.href = '../items.html'
  } else if(emailInput.value.length === 0){
    alert('이메일을 입력하세요');
  } else if(passwordInput.value.length === 0){
    alert('비밀번호를 입력하세요')
  }
  else{
    modalAll.classList.add('visible');
  }
  
}




