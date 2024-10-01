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
    this.validateMethods = [validator.validateEmail, validator.validatePassword];
  }

  onSubmit() {
    const values = this.getValues();
    const matchingAccount = USER_DATA.find((data) => data.email === values.email);
    matchingAccount?.password === values.password
      ? (window.location.href = "../items/index.html")
      : this.showModal(ERROR_MESSAGES.passwordNotMatch);
  }
}

new LoginForm().init();
