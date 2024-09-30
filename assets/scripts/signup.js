import $ from "./utils/query.js";
import { validator } from "./utils/validator.js";
import toggleInputError from "./utils/toggleInputError.js";

const inputs = [$("#email"), $("#nickname"), $("#password"), $("#confirm-password")];
const validateMethods = [
  validator.validateEmail,
  validator.validateNickname,
  validator.validatePassword,
  validator.validatePassword,
];

class signupForm {
  constructor() {
    this.inputValidState = {
      email: false,
      nickname: false,
      password: false,
      confirmPassword: false,
    };
  }

  init() {
    this.setInputs();
    $("form").addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "../items/index.html";
    });
  }

  setState(newState) {
    this.inputValidState = {
      ...this.inputValidState,
      ...newState,
    };
    $("button").disabled = Object.values(this.inputValidState).some((state) => !state);
  }

  setInputs() {
    inputs.forEach((input, index) => {
      input.addEventListener("focusout", (e) => {
        const { value } = e.target;
        const message = validateMethods[index](value);
        toggleInputError(e, message);
        const keys = Object.values(this.inputValidState);
        this.setState({ [keys[index]]: message.length === 0 });
      });
    });
  }
}

new signupForm().init();
