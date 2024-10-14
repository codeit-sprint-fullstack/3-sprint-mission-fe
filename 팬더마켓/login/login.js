const id = document.querySelector('.wrap');
const enterId=document.querySelector('.enterIdMsg');
const wrongId = document.querySelector('.wrongIdMsg');
const button=document.querySelector('.loginbtn');
const pw = document.querySelector('.wrap-pw');
const enterPw=document.querySelector('.enterPwMsg');
const wrongPw = document.querySelector('.wrongPwMsg');
const close=document.querySelector('.close_btn');
const modal=document.querySelector('.modal');  



const inputComponentState = {
  allPass : () => {
  wrongId.classList.add('hide');
  enterId.classList.add('hide'); 
  id.classList.remove('invalid');
  },
  wrongErrorMessage : () => {
  wrongId.classList.remove('hide');
  enterId.classList.add('hide');
  id.classList.add('invalid')
  },
  enterErrorMessage : () => {
    wrongId.classList.add('hide');
    enterId.classList.remove('hide');
    id.classList.add('invalid');
  }
}

function checkId(e){
  if (!e.target.value.length) inputComponentState.enterErrorMessage()
  if (e.target.value && emailcheck(e.target.value)) inputComponentState.allPass()
}

function validate(e){
  if (e.target.value && emailcheck(e.target.value)) inputComponentState.allPass()
  else inputComponentState.wrongErrorMessage()
}

id.addEventListener('focusout', checkId);
id.addEventListener('input', validate);

function emailcheck(email_address){
  const email_regex = /^[0-9a-zA-Z]+([._-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+([._-]?[0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/i;
  if(!email_regex.test(email_address)) return false;
  else return true;
}

function checkPw(a){
    if(a.target.value.length===0){
        enterPw.classList.remove('hide');
        pw.classList.add('invalid');
    }else{
        enterPw.classList.add('hide');
        pw.classList.remove('hide');
    }
}

function lengPw(d){
    if(d.target.value.length >0 && d.target.value.length < 8){
        wrongPw.classList.remove('hide');
        enterPw.classList.add('hide');
        pw.classList.add('invalid');
    }else{
        wrongPw.classList.add('hide');
        enterPw.classList.add('hide');
        pw.classList.remove('invalid');
    }
}

pw.addEventListener('focusout',checkPw);
pw.addEventListener('input',lengPw);

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

  var users = USER_DATA.find(userdata => userdata.email ===id.value && userdata.password ===pw.value);

  if(!users && pw.value.length !=0 && id.value.length!=0){
    modal.classList.remove('hide');
  }if(users && pw.value.lenght !=0&&id.value.length!=0){
    alert('로그인 성공');
    window.location.href ="../itmes/itmes.html";
  }
});

close.addEventListener('click',function(){
  modal.style.display='none';
});
