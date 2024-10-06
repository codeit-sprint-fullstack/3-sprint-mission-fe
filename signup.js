//이메일 유효성 검사
const chk_email = document.querySelector('#chk_email');
const email_message = document.querySelector('#email_message');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

chk_email.addEventListener('input', function(){
   if (emailPattern.test(chk_email.value)) {
  email_message.style.display = 'none';
}  else {
  email_message.style.display = 'block';

  }
});

//비밀번호 8자 이상
const chkpw = document.querySelector('#chkpw');
const pw_message = document.querySelector('#pw_message');

chkpw.addEventListener('input', function() {
  
  if (chkpw.value.length && chkpw.value.length < 8) {
    pw_message.style.display = 'block';  
  } else {
    pw_message.style.display = 'none';   
  }
});

chkpw.addEventListener('mouseout', function() {  
    pw_message.style.display = 'none'; 
});

//비밀번호 확인일치
const again_chk_pw = document.querySelector('#again_chk_pw');
const again_pw_message = document.querySelector('#again_pw_message');

again_chk_pw.addEventListener('input', function() { 
  console.log('event1');
  if (chkpw.value!=='' && again_chk_pw.value!=='') {
    if(chkpw.value===again_chk_pw.value){
    again_pw_message.style.display = 'none';  
  } else {
    again_pw_message.style.display = 'block';   
  }
  }
});
again_pw_message.addEventListener('mouseout', function() {  
  again_pw_message.style.display = 'none';});

  //사용중인 이메일

  const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
  ];
  
  const btnNewbeeJoin = document.querySelector('#btn-newbeejoin');
  const modalBackground = document.querySelector('#modal-background');
  const modalOk = document.querySelector('#modal-ok');
  const emailInput = document.querySelector('#chk_email');
  const passwordInput = document.querySelector('#chkpw');
  
  console.log('체크');
  
  // 회원가입 클릭 
  btnNewbeeJoin.addEventListener('click', function(event) {
    event.preventDefault();
  
    // 유저가 입력한 이메일, 비밀번호 값 변수선언
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    // 유저가 입력한 이메일, 비밀번호 일치확인
    const user = USER_DATA.find(user => user.email === emailValue);
  
  //유저데이터 일치 >> 모달열기
    if (user) {
      modalBackground.style.display = 'block';
    } else {
      alert('회원가입 성공!');
    }
  });
  
  // 확인클릭 모달닫기
  modalOk.addEventListener('click', function() {
    modalBackground.style.display = 'none';
  });
