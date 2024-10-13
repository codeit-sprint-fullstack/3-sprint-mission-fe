import { VALIDATION_VALUES } from "../constants/validationValues.js";
import { ERROR_MESSAGES } from "../constants/messages.js";

const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}(\.[a-z]{2,})?$/;

export const validator = {
  validateEmail(email) {
    if (!email.length) return ERROR_MESSAGES.inputEmail;
    if (!emailRegex.test(email)) return ERROR_MESSAGES.invalidEmail;
    return "";
  },
  validatePassword(password) {
    if (!password.length) return ERROR_MESSAGES.inputPassword;
    if (password.length < VALIDATION_VALUES.passwordLength)
      return ERROR_MESSAGES.inputValidLengthPassword;
    return "";
  },
  validateNickname(nickname) {
    if (!nickname.length) return ERROR_MESSAGES.inputNickname;
    return "";
  },

  validatePasswordConfirm(password, confirmPassword) {
    if (password !== confirmPassword) return ERROR_MESSAGES.passwordNotMatch;
    return "";
  },
};
