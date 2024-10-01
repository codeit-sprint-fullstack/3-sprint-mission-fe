import $ from "../utils/query.js";
import { validator } from "../utils/validator.js";
import toggleInputError from "../utils/toggleInputError.js";

class Sign {
  constructor() {
    this.inputValidState = {};
    this.inputs = {};
  }

  init() {
    this.setInputs();
    this.setFormSubmit();
    this.setCloseButton();
    this.handleToggleButton();
  }

  setState(newState) {
    this.inputValidState = {
      ...this.inputValidState,
      ...newState,
    };
    $("#submit-button").disabled = Object.values(this.inputValidState).some((state) => !state);
  }

  setInputs() {
    const validateMethods = [
      validator.validateEmail,
      validator.validateNickname,
      validator.validatePassword,
      validator.validatePassword,
    ];
    Object.values(this.inputs).forEach((input, index) => {
      input.addEventListener("focusout", (e) => {
        const { value } = e.target;
        const message = validateMethods[index](value);
        toggleInputError(e, message);
        const keys = Object.keys(this.inputValidState);
        this.setState({ [keys[index]]: message.length === 0 });
      });
    });
  }

  setFormSubmit() {
    $("form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.onSubmit();
    });
  }

  showModal(message) {
    $("#modal-container").classList.add("show");
    $("#error-message").innerText = message;
  }

  setCloseButton() {
    $("#modal-close-button").addEventListener("click", () => {
      $("#modal-container").classList.remove("show");
    });
  }

  onSubmit() {}

  togglePasswordVisibility(e) {
    const { target } = e;
    target.classList.toggle("fa-eye-slash");
    target.classList.toggle("fa-eye");
    const input = target.closest("div").querySelector("input");
    const TYPES = ["text", "password"];
    const inputType = input.type;
    input.type = TYPES[1 - TYPES.indexOf(inputType)];
  }

  handleToggleButton() {
    document
      .querySelectorAll(".eye-icon")
      .forEach((icon) => icon.addEventListener("click", this.togglePasswordVisibility));
  }
}

export default Sign;
