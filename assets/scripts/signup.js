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
    this.validateMethods = [
      validator.validateEmail,
      validator.validateNickname,
      validator.validatePassword,
      validator.validatePassword,
    ];
  }

  onSubmit() {
    const values = this.getValues();
    const matchingAccount = USER_DATA.find((data) => data.email === values.email);
    matchingAccount
      ? this.showModal(ERROR_MESSAGES.emailAlreadyInUse)
      : values.password === values.confirmPassword
      ? (window.location.href = "../items/index.html")
      : this.showModal(ERROR_MESSAGES.passwordNotMatch);
  }
}

new signupForm().init();
