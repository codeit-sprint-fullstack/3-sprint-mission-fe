// querySelector로 해당 id의 DOM을 가져온다.
const form = document.querySelector('.form');
const usermail = document.querySelector('#signup-usermail'); // 이메일
const signupNickname = document.querySelector('#signup-nickname'); // 닉네임
const password = document.getElementById('password');  // 비밀번호
const confirmPassword = document.getElementById('confirm-password'); // 비밀번호 확인


const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

// 회원가입 버튼 누를때 발생 하는 이벤트 흐름 제어.
// showError 에서 false
// 회원가입 버튼 누를때 checkRequired() 함수에서 true 초기화.
let goFlag = false;

// Show input error message
function showError(infoInput, message) {

  goFlag = false;

  let formControl = undefined;  

  // input의 부모 요소 가져오기  
  if(infoInput.type === "password")
  {
    formControl = infoInput.parentElement.parentElement; // div        
  }
  else{
    formControl = infoInput.parentElement; // div
  }

  formControl.className = 'signup-form-control error'; // formControl의 클래스 이름 변경
  const small = formControl.querySelector('small'); // formControl 내부에서 small이라는 태그 가져오기
  small.innerText = message; // small 태그의 텍스트 변경
  alert(message);
}

// Show success outline
function showSuccess(infoInput) {
  
  // input의 부모 요소 가져오기
  //if(infoInput === 'input#password') // formControl 값이 'div.input-wrapper' 여서 하드코딩. ㅠ.ㅠ
  if(infoInput.type === "password")
    {
      formControl = infoInput.parentElement.parentElement; // div    
    }
    else{
      formControl = infoInput.parentElement; // div
    }

  formControl.className = 'signup-form-control success'; // formControl의 클래스 이름 변경
}


// Get fieldname
function getFieldName(infoInput) {
  return infoInput.id.charAt(0).toUpperCase() + infoInput.id.slice(1); // 첫글자 대문자로 바꿔서 출력.
}


// Check required fields
function checkRequired(inputArray) {

  goFlag = true;  // 회원가입 버튼 누를 때 마다 최초 여기로 들어온다. true로 초기화.

  inputArray.forEach(function (infoInput) {

    if(goFlag === false)
      return;

    if (infoInput.value.trim() === '') { // 공백을 제거했더니 값이 없다.
      console.log(infoInput.id);

      if(infoInput.name === "signup-usermail"){showError(infoInput, `이메일을 입력해주세요`);}      
      else if(infoInput.name === "signup-nickname"){showError(infoInput, `닉네임을 입력해주세요`);}              
      else if(infoInput.name === "password"){showError(infoInput, `비밀번호를 입력해주세요`);}            
      else if(infoInput.name === "confirm-password"){showError(infoInput, `비밀번호를 다시 한번 입력해주세요`);}        
      else{showError(infoInput, `${getFieldName(infoInput)} is required`);}

    } else {
      showSuccess(infoInput);
    }

  });
}


function checkEmail(usermailInfo) {

  if(goFlag === false) {
    return;
  }

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // String 값의 trim() 메서드는 문자열 양 끝의 공백을 제거하면서 
  // 원본 문자열을 수정하지 않고 새로운 문자열을 반환합니다.
  if (regex.test(usermailInfo.value.trim()))   
    showSuccess(usermailInfo);
  else 
    showError(usermailInfo, '잘못된 이메일 형식입니다.');
}


// Check input length
function checkLength(infoInput, min, max) {
  
  if(goFlag === false) {
    return;
  }

  if (infoInput.value.length < min) { 
    if(infoInput.type === "password")
      showError(infoInput, `비밀번호를 ${min}자 이상 입력해 주세요.`);  
    else
      showError(infoInput, `${getFieldName(infoInput)} must be at least ${min} characters`);
  } 
  else if (infoInput.value.length > max) {    
    showError(infoInput, `${getFieldName(infoInput)} must be less than ${max} characters`);
  } 
  else {
    showSuccess(infoInput);    
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {

  if(goFlag === false) {
    return;
  }

  if (input1.value === input2.value) {
    showSuccess(input2);
  } else {
    showError(input2, '비밀번호가 일치하지 않습니다.');
  }
}


function signupUser(usermailInfo, passwordInfo, nicknameInfo) {

  if(goFlag === false) {
    return;
  }

  const mailValue = usermailInfo.value;
  const passwordValue = passwordInfo.value;
  const nicknameValue = nicknameInfo.value;
    
  const userData1 = USER_DATA.find((el) => mailValue === el.email);

  // 1. 입력한 이메일이 이미 데이터베이스에 존재하는가?
  if (userData1 !== undefined) {
    showError(usermailInfo, '사용 중인 이메일입니다.');
  }
  else {
    // 입력한 이메일이 데이터베이스에 없는 경우, 회원가입이 성공적으로 처리 됨.
    // 로그인 페이지("../login/")로 이동.
    showSuccess(usermailInfo);
    
    // 현재 페이지를 새로운 페이지로 덮어 씌우기 때문에 이전 페이지로 이동이 불가능하다.
    // 테스트 해보니 메인 페이지로 이동한다.
    // 이전 페이지로 접근이 필요없는 경우 보안상 덮어씌우는 것도 괜찮을 듯 하다.
    window.location.replace("login.html");
  }
}


// Event listeners

// form에 input된 정보 전달 되었을 때 실행.
form.addEventListener('submit', function (event) {
  event.preventDefault(); // submit시 자동 새로고침을 막음

  checkRequired([usermail, signupNickname, password, confirmPassword]);
  
  checkEmail(usermail);    
  checkLength(password, 8, 25);
  checkLength(confirmPassword, 8, 25);

  checkPasswordsMatch(password, confirmPassword);
  
  signupUser(usermail, password, signupNickname);
});
