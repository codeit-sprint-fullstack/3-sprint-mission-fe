import $ from "./utils/query.js";
import { USER_DATA } from "./constants/userData.js";
import { ERROR_MESSAGES } from "./constants/messages.js";
import Sign from "./core/sign.js";

class LoginForm extends Sign {
  constructor() {
    super();
    this.inputValidState = {
      email: false,
      password: false,
    };
    this.inputs = {
      email: $("#email"),
      password: $("#password"),
    };
  }

  onSubmit() {
    const [email, password] = Array.from(Object.values(this.inputs)).map((input) => input.value);
    const matchingAccount = USER_DATA.find((data) => data.email === email);
    matchingAccount?.password === password
      ? (window.location.href = "../items/index.html")
      : this.showModal(ERROR_MESSAGES.passwordNotMatch);
  }
}

new LoginForm().init();
