import $ from "./utils/query.js";
import { ERROR_MESSAGES } from "./constants/messages.js";
import { USER_DATA } from "./constants/userData.js";
import Sign from "./core/sign.js";
import { validator } from "./utils/validator.js";
import { KEYS } from "./constants/names.js";

class signupForm extends Sign {
  constructor() {
    super();
    this.inputValidState = {
      [KEYS.email]: false,
      [KEYS.nickname]: false,
      [KEYS.password]: false,
      [KEYS.confirmPassword]: false,
    };
    this.inputs = {
      [KEYS.email]: $("#email"),
      [KEYS.nickname]: $("#nickname"),
      [KEYS.password]: $("#password"),
      [KEYS.confirmPassword]: $("#confirm-password"),
    };
    this.validateMethods = {
      [KEYS.email]: validator.validateEmail,
      [KEYS.nickname]: validator.validateNickname,
      [KEYS.password]: validator.validatePassword,
      [KEYS.confirmPassword]: validator.validatePassword,
    };
  }

  onSubmit() {
    const values = this.getValues();
    const emailAlreadyInUse = USER_DATA.find((data) => data.email === values.email);
    const passwordMatch = values.password === values.confirmPassword;
    emailAlreadyInUse
      ? this.handleSignupFailure(ERROR_MESSAGES.emailAlreadyInUse)
      : !passwordMatch
      ? this.handleSignupFailure(ERROR_MESSAGES.passwordNotMatch)
      : this.handleSignupSuccess();
  }

  handleSignupSuccess() {
    super.handleSubmitSuccess();
    // 이후 추가 로직 작성
  }
  handleSignupFailure(message) {
    super.handleSubmitFailure(message);
    // 이후 추가 로직 작성
  }
}

new signupForm().init();
