// querySelector로 해당 id의 DOM을 가져온다.
const form = document.querySelector('.form');
const usermail = document.querySelector('#usermail');
const password = document.getElementById('password');


const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

// Show input error message
function showError(infoInput, message) {  

  let formControl = undefined;  
  formControl = infoInput.closest('.login-form-control');

  // input의 부모 요소 가져오기
  //if(infoInput === 'input#password') // formControl 값이 'div.input-wrapper' 여서 하드코딩. ㅠ.ㅠ
  // if(infoInput.type === "password")
  // {
  //   formControl = infoInput.parentElement.parentElement; // div    
  // }
  // else{
  //   formControl = infoInput.parentElement; // div
  // }

  formControl.className = 'login-form-control error'; // formControl의 클래스 이름 변경
  const small = formControl.querySelector('small'); // formControl 내부에서 small이라는 태그 가져오기
  small.innerText = message; // small 태그의 텍스트 변경
  alert(message);
  return false;
}

// Show success outline
function showSuccess(infoInput) {
  
  // input의 부모 요소 가져오기 - closest() 메소드를 이용해서 div를 얻어온다. 
  // closest() 메소드는 DOM 요소에서 가장 가까운 상위 요소를 찾는 데 사용한다.
  // 이 메소드는 주어진 셀렉터 또는 요소와 가장 가까운 상위 요소를 반환합니다.
  let formControl = undefined;
  formControl = infoInput.closest('.login-form-control');

  //if(infoInput === 'input#password') // formControl 값이 'div.input-wrapper' 여서 하드코딩. ㅠ.ㅠ
  // if(infoInput.type === "password")
  //   {
  //     formControl = infoInput.parentElement.parentElement; // div    
  //   }
  //   else{
  //     formControl = infoInput.parentElement; // div
  //   }

  formControl.className = 'login-form-control success'; // formControl의 클래스 이름 변경
  return true;
}


/*
charAt(): 문자열의 특정위치에 해당하는 문자를 리턴
toUpperCase(): 주어진 문자열의 모든 문자를 대문자로 변환
slice(start, end): 지정된 start 위치에서 end 위치까지의 문자열을 슬라이스
                    e.g. sllice(1) 2번째 문자부터 끝까지 출력.
*/

// Get fieldname
function getFieldName(infoInput) {
  return infoInput.id.charAt(0).toUpperCase() + infoInput.id.slice(1); // 첫글자 대문자로 바꿔서 출력.
}


// Check required fields
function checkRequired(inputArray) {

  let goFlag = true; // 로그인 버튼 누를때 발생 하는 이벤트 흐름 제어. e.g. 이메일 빈칸 이고, 패스워드 빈칸이었을때 이메일 빈칸 에러에서 멈춤다.

  inputArray.forEach(function (infoInput) {

    if (infoInput.value.trim() === '') { // 공백을 제거했더니 값이 없다.
      console.log(infoInput.id);

      if(infoInput.name === "usermail"){
        goFlag = showError(infoInput, `이메일을 입력해주세요`);        
      }      
      else if(infoInput.name === "password"){
        goFlag = showError(infoInput, `비밀번호를 입력해주세요`);        
      }            
      else{
        goFlag = showError(infoInput, `${getFieldName(infoInput)} is required`);        
      }
    } 
    else {
      goFlag = showSuccess(infoInput);
    }
  });

  return goFlag;
}

function checkEmail(usermailInfo) {

  let goFlag = true;

  // const infoInput = document.getElementById("usermailInfo").value
  // const valueInput = usermailInfo.value.trim();

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // String 값의 trim() 메서드는 문자열 양 끝의 공백을 제거하면서 
  // 원본 문자열을 수정하지 않고 새로운 문자열을 반환합니다.
  if (regex.test(usermailInfo.value.trim()))   
    goFlag = showSuccess(usermailInfo);
  else 
    goFlag = showError(usermailInfo, '잘못된 이메일 형식입니다.');

  return goFlag;
}


// Check input length
function checkLength(infoInput, min, max) {
  
  let goFlag = true;

  if (infoInput.value.length < min) { 
    if(infoInput.type === "password")
      goFlag = showError(infoInput, `비밀번호를 ${min}자 이상 입력해 주세요.`);  
    else
      goFlag = showError(infoInput, `${getFieldName(infoInput)} must be at least ${min} characters`);
  } 
  else if (infoInput.value.length > max) {    
    goFlag = showError(infoInput, `${getFieldName(infoInput)} must be less than ${max} characters`);
  } 
  else {
    goFlag = showSuccess(infoInput);
  }
  return goFlag;
}


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

  return true;
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