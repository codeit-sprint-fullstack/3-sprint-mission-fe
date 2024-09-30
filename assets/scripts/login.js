import $ from "./utils/query.js";
import { validator } from "./utils/validator.js";
import toggleInputError from "./utils/toggleInputError.js";

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
    [$("#email"), $("#password")].forEach((input, index) => {
      input.addEventListener("focusout", (e) => {
        const { value } = e.target;
        const message = [validator.validateEmail, validator.validatePassword][index](value);
        toggleInputError(e, message);
        const key = ["email", "password"][index];
        if (!message.length) return this.setState({ [key]: true });
        this.setState({ [key]: false });
      });
    });
  }
}

new LoginForm().init();
