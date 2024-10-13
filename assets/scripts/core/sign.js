import $ from "../utils/query.js";

class Sign {
  constructor() {
    // 인풋 값의 유효성 상태를 저장하는 객체
    this.inputValidState = {};
    // 페이지의 인풋 DOM요소
    this.inputs = {};
    // 인풋 값의 유효성검사 메소드
    this.validateMethods = {};
  }

  init() {
    this.handleInputFocusout();
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

  toggleInputError(e, message = "") {
    const errorMessageNode = e.target.closest("section").querySelector(".message");
    errorMessageNode.innerText = message;
    if (message.length) {
      e.target.classList.add("error");
      errorMessageNode.setAttribute("aria-hidden", false);
      return errorMessageNode.classList.add("show");
    }
    e.target.classList.remove("error");
    errorMessageNode.setAttribute("aria-hidden", true);
    errorMessageNode.classList.remove("show");
  }

  handleInputFocusout() {
    for (const key in this.inputs) {
      this.inputs[key].addEventListener("focusout", (e) => {
        const { value } = e.target;
        const message = this.validateMethods[key](value);
        this.toggleInputError(e, message);
        this.setState({ [key]: message.length === 0 });
      });
    }
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

  getValues() {
    return Object.values(this.inputs).reduce((acc, input, index) => {
      return { ...acc, [Object.keys(this.inputs)[index]]: input.value };
    }, {});
  }

  onSubmit() {}

  handleSubmitSuccess() {
    window.location.href = "../items/index.html";
  }

  handleSubmitFailure(message) {
    this.showModal(message);
  }

  togglePasswordVisibility(e) {
    const { target } = e;
    target.classList.toggle("fa-eye-slash");
    target.classList.toggle("fa-eye");
    const input = target.closest("div").querySelector("input");
    input.type === "text" ? (input.type = "password") : (input.type = "text");
  }

  handleToggleButton() {
    document
      .querySelectorAll(".eye-icon")
      .forEach((icon) => icon.addEventListener("click", this.togglePasswordVisibility));
  }
}

export default Sign;
