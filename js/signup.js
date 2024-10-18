const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
      { email: 'codeit2@codeit.com', password: "codeit202!" },
      { email: 'codeit3@codeit.com', password: "codeit303!" },
      { email: 'codeit4@codeit.com', password: "codeit404!" },
      { email: 'codeit5@codeit.com', password: "codeit505!" },
      { email: 'codeit6@codeit.com', password: "codeit606!" },]

      const emailinput = document.getElementById('signup-email');
      const nicknameinput = document.getElementById('nickname');
      const passwordinput = document.getElementById('signup-password');
      const passwordConfirminput = document.getElementById('check-password');
      const signupbutton = document.getElementById('signup-btn');

   
function validateForm() {
    const emailValue = emailinput.value.trim();
    const nicknameValue = nicknameinput.value.trim();
    const passwordValue = passwordinput.value.trim();
    const passwordConfirmvalue = passwordConfirminput.value.trim();
  
    // 칸이 다 채워져있고 비밀번호랑 비밀번호 확인이랑 값이 같을때
    if (emailvalue !== '' && nicknamevalue !== '' && passwordvalue !== '' && passwordvalue === passwordConfirmvalue) {
      signupbutton.disabled = false;  
    } else {
      signupbutton.disabled = true;   
    }
  }
  
  
  emailinput.addEventListener('input', validateForm);
  nicknameinput.addEventListener('input', validateForm);
  passwordinput.addEventListener('input', validateForm);
  passwordConfirminput.addEventListener('input', validateForm);
  
    const user = USER_DATA.find(user => user.email === emailValue);
  
    // 이메일이 이미 데이터 베이스에 있을때
    if (user) {
      alert('사용 중인 이메일입니다.');
    } 
    // 
    else if (passwordvalue !== passwordConfirmvalue) {
      // 비밀번호랑 비밀번호 확인이랑 다를때
      alert('비밀번호가 일치하지 않습니다.');
    } 
    else if (emailvalue === '' || nicknamevalue === '' || passwordvalue === '' || passwordConfirmvalue === '') {  // 모든 칸이 채워지는지 확인
      alert('모든 필드를 채워주세요.');
    }
    else {
      // 모두 채워졌을때
      alert('회원가입이 완료되었습니다.');
      window.location.href = '/login'; // "/login" 페이지로 이동
    }
  ; 