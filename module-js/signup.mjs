import {USER_DATA} from "./userData.mjs";
import {showSuccess, showError, checkRequired, checkEmail, checkLength} from "./common.mjs";

// querySelector로 해당 id의 DOM을 가져온다.
const form = document.querySelector('.form');
const usermail = document.querySelector('#signup-usermail'); // 이메일
const signupNickname = document.querySelector('#signup-nickname'); // 닉네임
const password = document.getElementById('password');  // 비밀번호
const confirmPassword = document.getElementById('confirm-password'); // 비밀번호 확인


// Check passwords match
function checkPasswordsMatch(input1, input2) {

  let goFlag = true;

  if (input1.value === input2.value) {
    goFlag = showSuccess(input2);
  } else {
    goFlag = showError(input2, '비밀번호가 일치하지 않습니다.');
  }
  return goFlag;
}


function signupUser(usermailInfo, passwordInfo, nicknameInfo) {

  let goFlag = true;

  const mailValue = usermailInfo.value;
  const passwordValue = passwordInfo.value;
  const nicknameValue = nicknameInfo.value;
    
  const userData1 = USER_DATA.find((el) => mailValue === el.email);

  // 1. 입력한 이메일이 이미 데이터베이스에 존재하는가?
  if (userData1 !== undefined) {
    goFlag = showError(usermailInfo, '사용 중인 이메일입니다.');
  }
  else {
    // 입력한 이메일이 데이터베이스에 없는 경우, 회원가입이 성공적으로 처리 됨.
    // 로그인 페이지("../login/")로 이동.
    goFlag = showSuccess(usermailInfo);
    
    // 현재 페이지를 새로운 페이지로 덮어 씌우기 때문에 이전 페이지로 이동이 불가능하다.
    // 테스트 해보니 메인 페이지로 이동한다.
    // 이전 페이지로 접근이 필요없는 경우 보안상 덮어씌우는 것도 괜찮을 듯 하다.
    window.location.replace("login.html");
  }
  return goFlag;
}


// Event listeners

// form에 input된 정보 전달 되었을 때 실행.
form.addEventListener('submit', function (event) {
  event.preventDefault(); // submit시 자동 새로고침을 막음

  let result = checkRequired([usermail, signupNickname, password, confirmPassword]);
  if(result === false) return;

  result = checkEmail(usermail);
  if(result === false) return;

  result = checkLength(password, 8, 25);
  if(result === false) return;

  result = checkLength(confirmPassword, 8, 25);
  if(result === false) return;

  result = checkPasswordsMatch(password, confirmPassword);
  if(result === false) return;
  
  result = signupUser(usermail, password, signupNickname);
  if(result === false) return;
});
