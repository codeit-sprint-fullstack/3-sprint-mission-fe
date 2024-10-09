//변수선언
const chkeamil = document.querySelector('#chkeamil');  
const email_Message = document.querySelector('#email_message');  
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
const chkpw = document.querySelector('#chkpw');  
const pw_message = document.querySelector('#pw_message');  
const btn_login_skin = document.querySelector('#btn-login');  

// 이메일 유효성 
chkeamil.addEventListener('input', function() {
    if (!emailPattern.test(chkeamil.value)) {
        email_Message.style.display = 'block';  
    } else {
        email_Message.style.display = 'none';  
    }
    loginbtnchk();  
});

// 비밀번호 8자리 이상 
chkpw.addEventListener('input', function() {
  if (chkpw.value.length > 0 && chkpw.value.length < 8) {
      pw_message.style.display = 'block';  
  } else {
      pw_message.style.display = 'none';   
  }
  loginbtnchk(); 
});
//마우스 벗어나면 문구사라짐
chkpw.addEventListener('mouseout', function() {
  pw_message.style.display = 'none';  
});


// 로그인 버튼 배경색 
function loginbtnchk() {
    
    if (emailPattern.test(chkeamil.value) && chkpw.value.length >= 8) {
        btn_login_skin.style.backgroundColor = '#3692FF';
        btn_login_skin.style.borderRadius = '40px';  
    } else {
        btn_login_skin.style.backgroundColor = '#9CA3AF';  
    }
}

//모달창 

const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

const btnLogin = document.querySelector('#btn-login');
const modalBackground = document.querySelector('#modal-background');
const modalOk = document.querySelector('#modal-ok');
const emailValue = chkeamil.value;
const passwordValue = chkpw.value;
const user = USER_DATA.find(user => user.email === emailValue && user.password === passwordValue);

//로그인 클릭
btnLogin.addEventListener('click', function(event) {
  event.preventDefault(); 

  //유저정보 불일치 모달열기
  if (!user) {
    modalBackground.style.display = 'block';
  } else { 
    alert('로그인 성공!');
  }
});

// 확인>> 모달닫기
modalOk.addEventListener('click', function() {
  modalBackground.style.display = 'none';
});

