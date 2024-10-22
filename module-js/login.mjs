import {USER_DATA} from "./userData.mjs";
import {showSuccess, showError, checkRequired, checkEmail, checkLength} from "./common.mjs";

// querySelector로 해당 id의 DOM을 가져온다.
const form = document.querySelector('.form');
const usermail = document.querySelector('#usermail');
const password = document.getElementById('password');

function loginUser(usermailInfo, passwordInfo) {

  let goFlag = true;


  const mailValue = usermailInfo.value;
  const passwordValue = passwordInfo.value;

  /*
  // 2. find 
  // 어떤 값을 찾는 순간, 반환하고, 반복문 바로 종료 
  // 배열에서 콜백 함수가 리턴하는 조건을 만족하는
  // 가장 첫 번째 요소를 리턴해주는 메소드입니다
  const developKing = employees.find( (info) => info.department === "개발");
  console.log(developKing);
  */
  
  // 1. 유저메일로 데이터베이스에 저장된 유저정보를 획득 시도한다.
  const userData1 = USER_DATA.find((el) => mailValue === el.email);

  if (userData1 !== undefined) {
    const userData2 = USER_DATA.find((el) => mailValue === el.email && passwordValue === el.password);

    if (userData2 !== undefined) {
          // 유저가 있고 비밀번호도 맞다. /items 로 이동.
          goFlag = showSuccess(usermailInfo);

          // 페이지 이동하는 것. 뒤로가기 버튼을 누른 경우 이전 페이지로 이동 가능
          // window.location.href = "../items.html"; 
          
          // 현재 페이지를 새로운 페이지로 덮어 씌우기 때문에 이전 페이지로 이동이 불가능하다.
          // 테스트 해보니 메인 페이지로 이동한다.
          // 이전 페이지로 접근이 필요없는 경우 보안상 덮어씌우는 것도 괜찮을 듯 하다.
          window.location.replace("items.html");
      }
      else {
        goFlag = showError(passwordInfo, '비밀번호가 일치하지 않습니다.');
      }
  }
  else {
    goFlag = showError(usermailInfo, '이메일을 찾을 수 없습니다. 입력 정보를 다시 확인해 주세요.');
  }

  return goFlag;
}


// Event listeners
// 1. email에 아무 입력도 없으면, 패스워드에 아무 입력도 없으면 checkRequired()
//
// 2. 기본 체크사항
// 2-1. email 형식 지켰나 체크 checkEmail()
// 2-2. 패스워드 8자 이상 지켰나. checkLength()
//
// 3. 이메일 데이터베이스 체크 loginUser()
//        // 데이터베이스에 있는가?
//            // 있다. 하지만, 비밀번호가 일치안함.  --> 비밀번호가 일치하지 않습니다.
//        // 데이터베이스에 없다. --> 존재하지 않는 유저입니다.
//        
//        // 모두 ok인 경우 /items로 이동.

// form에 input된 정보 전달 되었을 때 실행.
form.addEventListener('submit', function (event) {
  event.preventDefault(); // submit시 자동 새로고침을 막음

  let result = checkRequired([usermail, password]);
  if(result === false) return;
  
  result = checkEmail(usermail);
  if(result === false) return;

  result = checkLength(password, 8, 25);
  if(result === false) return;

  result = loginUser(usermail, password);
  if(result === false) return;
});

// 버튼 클릭시 처리하려고 했으나, 이벤트 발생 취지에 맞게 작업하려고.
// loginBtn.addEventListener('click', checkEmail);