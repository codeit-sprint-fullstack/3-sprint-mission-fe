const mId = document.querySelector('.email');
const msg = document.querySelector('.formMsg');
const nMsg = document.querySelector('.noneMsg');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close_btn');

mId.addEventListener('focusout', noneMail);
mId.addEventListener('input', Idvalidate);

function noneMail(e){
  if(!e.target.value.length){
    nMsg.classList.remove('hide');
    msg.classList.add('hide');
    mId.classList.add('border');
  }if(e.target.value &&Idvalidate(e.target.value)){
    nMsg.classList.add('hide');
    msg.classList.add('hide');
    mId.classList.remove('border');
  }
}

function emailcheck(email_address){
  const email_regex = /^[0-9a-zA-Z]+([._-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+([._-]?[0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/i;
  if(!email_regex.test(email_address)) return false;
  else return true;
}

function Idvalidate(e){
  if(e.target.value && emailcheck(e.target.value)){
    msg.classList.add('hide');
    nMsg.classList.add('hide');
    mId.classList.remove('border');
  }else{
    msg.classList.remove('hide');
    nMsg.classList.add('hide');
    mId.classList.add('border');
  }
}
  
const password= document.querySelector('.pw');
const leng = document.querySelector('.lMsg');
const noPw = document.querySelector('.noPw');
const rePwMsg = document.querySelector('.recheck');

password.addEventListener('focusout',checkPassword);
password.addEventListener('input',lengPassword);

function checkPassword(e){
  if(e.target.value.length===0){
    noPw.classList.remove('hide');
    password.classList.add('border');

  }else{
    noPw.classList.add('hide');
    password.classList.remove('border');
  }
}

function lengPassword(d){
    if(d.target.value.length >0 && d.target.value.length < 8){
        leng.classList.remove('hide');
        noPw.classList.add('hide');
        password.classList.add('redborder');
    }else{
        leng.classList.add('hide');
        noPw.classList.add('hide');
        password.classList.remove('redborder');
    }
}

const reEnter = document.querySelector('.re');
const same = document.querySelector('.matchMsg');
const Nick = document.querySelector('.nickname');
const enterNick = document.querySelector('.nickMsg');
const button = document.querySelector('.btn');
const inputPw = document.querySelector('.pass')

reEnter.addEventListener('focusout',recheckPw);
reEnter.addEventListener('input',samePass);
Nick.addEventListener('focusout', checkNick);

function checkNick(a){
  if(a.target.value.length===0){
    enterNick.classList.remove('hide');
    Nick.classList.add('border');
  }else{
    enterNick.classList.add('hide');
    Nick.classList.remove('border');
  }
}

function recheckPw(a){
  if(a.target.value.length===0){
    rePwMsg.classList.remove('hide');
    same.classList.add('hide');
    reEnter.classList.add('border');
  }else{
    rePwMsg.classList.add('hide');
    reEnter.classList.remove('real');
  }
}

function samePass(){
    if(password.value ===inputRePw.value){
      rePwMsg.classList.add('hide');
      same.classList.add('hide');
      reEnter.classList.remove('border');
    }else{
      rePwMsg.classList.add('hide');
      same.classList.remove('hide');
      reEnter.classList.add('border');
    }
}


const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

button.addEventListener('click',function(event){
  event.preventDefault();

  var users = USER_DATA.find(userdata=> userdata.email===mId.value);

  if(users && Nick.value.length!=0 && mId.value.length !=0 && password.value.length!=0 && reEnter.value.length!=0){
    modal.classList.remove('hide');
  }if(!users && Nick.value.length!=0 && mId.value.length !=0 && password.value.length!=0 && reEnter.value.length!=0){
    alert('회원가입 성공');
    window.location.href="../login/login.html";
  }
})

close.addEventListener('click',function(){
  modal.style.display='none';
});

const toggleBtn = document.querySelector('.password-toggle');

toggleBtn.addEventListener('click', passwordTogle);

function passwordTogle(){
  const input = toggleBtn.previousElementSibling
  if(input.type==='password'){
    input.type = 'text';
    toggleBtn.style.backgroundImage = "url('../images/social/btn_visibility_on')";
  }else {
    input.type = 'password';
    toggleBtn.style.backgroundImage = "url('../images/social/btn_visibility_off')";
  }
}

const toggleBtn2 = document.querySelector('.password-toggle2');

toggleBtn2.addEventListener('click',seePassword);

function seePassword(){
  const input = toggleBtn2.previousElementSibling
  if(input.type==='password'){
    input.type = 'text';
    toggleBtn2.style.backgroundImage = "url('../images/social/btn_visibility_on')";
  }else{
    input.type = 'password';
    toggleBtn2.style.backgroundImage=  "url('../images/social/btn_visibility_off')";
  }
}