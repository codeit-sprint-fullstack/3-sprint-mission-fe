/**
 * @typedef { Object } errMsg
 * @property { string } invalid - 유효하지 않은 입력값
 * @property { string } empty - 입력값이 비어있음
 */

/**
 * @typedef { Object} errMsgType - input의 name과 invalid 유형별 따른 메세지 정의
 * @property { errMsg } email
 * @property { errMsg } password
 *
 */
const errMsgType = {
  email: {
    invalid: '이메일 형식이 올바르지 않습니다.',
    empty: '이메일을 입력해주세요.'
  },
  password: {
    invalid: '비밀번호는 8자 이상이어야 합니다.',
    empty: '비밀번호를 입력해주세요.'
  }
}

/**
 * 비밀번호 가시성 토글
 * @param { HTMLInputElement } target - input checkbox으로 설정된 비밀번호 가시성 토글
 */
export const toggleInputVisibility = (target) => {
  const pwdInput = target.previousElementSibling;
  pwdInput.type = target.checked ? 'text' : 'password';
}

/**
 * 유효성 검사 메세지 설정
 * @param { HTMLInputElement } target - 유효성 검사를 할 input 요소
 */
export const setValidationMsg = (target) => {
  const errMsg = target.parentElement.querySelector('.form-error-msg')
    ?? target.parentElement.parentElement.querySelector('.form-error-msg');

  if (target.validity.valid) {
    errMsg.textContent = '';
    return;
  }

  if (target.value) {
    errMsg.textContent = errMsgType[target.name].invalid;
  } else {
    errMsg.textContent = errMsgType[target.name].empty;
  }
}
