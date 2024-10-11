import { VALIDATION_VALUES } from "./validationValues.js";

export const ERROR_MESSAGES = {
  inputEmail: "이메일을 입력해주세요.",
  invalidEmail: "잘못된 이메일 형식입니다",
  inputPassword: "비밀번호를 입력해주세요.",
  inputValidLengthPassword: `비밀번호를 ${VALIDATION_VALUES.passwordLength}자 이상 입력해주세요.`,
  passwordNotMatch: "비밀번호가 일치하지 않습니다.",
  emailAlreadyInUse: "사용 중인 이메일입니다",
  inputNickname: "닉네임을 입력해주세요.",
};

export const HTTP_ERROR_MESSAGE = {
  404: "문서를 찾을 수 없습니다.",
  requestError: "서버로부터 응답이 없습니다.",
  else: "예기치 않은 오류가 발생했습니다.",
};
