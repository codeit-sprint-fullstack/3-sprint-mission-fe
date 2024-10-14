export function showError(infoInput, message) {  

  let formControl = undefined;  
  formControl = infoInput.closest('.form-control');

  formControl.className = 'form-control error'; // formControl의 클래스 이름 변경
  const small = formControl.querySelector('small'); // formControl 내부에서 small이라는 태그 가져오기

  small.innerText = message; // small 태그의 텍스트 변경
  alert(message);
  return false;
}

export function showSuccess(infoInput) {
  
  // input의 부모 요소 가져오기 - closest() 메소드를 이용해서 div를 얻어온다. 
  // closest() 메소드는 DOM 요소에서 가장 가까운 상위 요소를 찾는 데 사용한다.
  // 이 메소드는 주어진 셀렉터 또는 요소와 가장 가까운 상위 요소를 반환합니다.
  let formControl = undefined;
  formControl = infoInput.closest('.form-control');
  formControl.className = 'form-control success'; // formControl의 클래스 이름 변경
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
export function checkRequired(inputArray) {

  let goFlag = true; // 로그인 버튼 누를때 발생 하는 이벤트 흐름 제어. e.g. 이메일 빈칸 이고, 패스워드 빈칸이었을때 이메일 빈칸 에러에서 멈춤다.

  inputArray.forEach(function (infoInput) {

    if (infoInput.value.trim() === '') { // 공백을 제거했더니 값이 없다.
      console.log(infoInput.id);

      if(goFlag === false)return goFlag;

      if(infoInput.name === "usermail"){
        goFlag = showError(infoInput, `이메일을 입력해주세요`);
      }
      else if(infoInput.name === "signup-nickname"){
        goFlag = showError(infoInput, `닉네임을 입력해주세요`);
      }
      else if(infoInput.name === "password"){
        goFlag = showError(infoInput, `비밀번호를 입력해주세요`);        
      }
      else if(infoInput.name === "confirm-password"){
        goFlag = showError(infoInput, `비밀번호를 다시 한번 입력해주세요`);
      }
      else{
        goFlag = showError(infoInput, `${getFieldName(infoInput)} is required`);        
      }
    } 
    else {
      if(goFlag === false)return goFlag;
      goFlag = showSuccess(infoInput);
    }
  });

  return goFlag;
}

export function checkEmail(usermailInfo) {

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
export function checkLength(infoInput, min, max) {
  
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