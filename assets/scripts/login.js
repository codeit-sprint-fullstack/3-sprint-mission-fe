import $ from "./utils/query.js";
import { USER_DATA } from "./constants/userData.js";
import { ERROR_MESSAGES } from "./constants/messages.js";
import Sign from "./core/sign.js";
import { validator } from "./utils/validator.js";
import { KEYS } from "./constants/names.js";

class LoginForm extends Sign {
  constructor() {
    super();
    this.inputValidState = {
      [KEYS.email]: false,
      [KEYS.password]: false,
    };
    this.inputs = {
      [KEYS.email]: $("#email"),
      [KEYS.password]: $("#password"),
    };
    this.validateMethods = {
      [KEYS.email]: validator.validateEmail,
      [KEYS.password]: validator.validatePassword,
    };
  }

  onSubmit() {
    const values = this.getValues();
    const matchingAccount = USER_DATA.find((data) => data.email === values.email);
    matchingAccount?.password === values.password
      ? this.handleLoginSuccess()
      : this.handleLoginFailure(ERROR_MESSAGES.passwordNotMatch);
  }

  handleLoginSuccess() {
    super.handleSubmitSuccess();
    // 이후 추가 로직 작성
  }
  handleLoginFailure(message) {
    super.handleSubmitFailure(message);
    // 이후 추가 로직 작성
  }
}

new LoginForm().init();
