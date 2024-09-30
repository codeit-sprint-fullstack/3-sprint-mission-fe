import $ from "./utils/query.js";
import { validator } from "./utils/validator.js";
import toggleInputError from "./utils/toggleInputError.js";

const inputs = [$("#email"), $("#password")];
const validateMethods = [validator.validateEmail, validator.validatePassword];

class LoginForm {
  constructor() {
    this.inputValidState = {
      email: false,
      password: false,
    };
  }

  init() {
    this.setBothInput();
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

  setBothInput() {
    inputs.forEach((input, index) => {
      input.addEventListener("focusout", (e) => {
        const { value } = e.target;
        const message = validateMethods[index](value);
        toggleInputError(e, message);
        const keys = Object.keys(this.inputValidState);
        this.setState({ [keys[index]]: message.length === 0 });
      });
    });
  }
}

new LoginForm().init();
