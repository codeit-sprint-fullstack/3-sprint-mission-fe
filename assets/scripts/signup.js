import $ from "./utils/query.js";
import { ERROR_MESSAGES } from "./constants/messages.js";
import { USER_DATA } from "./constants/userData.js";
import Sign from "./core/sign.js";

class signupForm extends Sign {
  constructor() {
    super();
    this.inputValidState = {
      email: false,
      nickname: false,
      password: false,
      confirmPassword: false,
    };
    this.inputs = {
      email: $("#email"),
      nickname: $("#nickname"),
      password: $("#password"),
      confirmPassword: $("#confirm-password"),
    };
  }

  onSubmit() {
    const [email, nickname, password, confirmPassword] = Array.from(Object.values(this.inputs)).map(
      (input) => input.value
    );
    const matchingAccount = USER_DATA.find((data) => data.email === email);
    matchingAccount
      ? alert(ERROR_MESSAGES.emailAlreadyInUse)
      : password === confirmPassword
      ? (window.location.href = "../items/index.html")
      : alert(ERROR_MESSAGES.passwordNotMatch);
  }
}

new signupForm().init();
