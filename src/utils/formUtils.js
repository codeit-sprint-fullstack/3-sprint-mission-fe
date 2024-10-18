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

export const toggleInputVisibility = (target) => {
  const pwdInput = target.previousElementSibling;
  pwdInput.type = target.checked ? 'text' : 'password';
}

/**
 *
 * @param { HTMLInputElement } target
 */
export const setValidationMsg = (target) => {
  const errMsg = target.parentElement.querySelector('.form-error-msg');
  const { valid } = target.validity;
  console.log(valid)

}