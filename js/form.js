const forms = document.querySelector("#forms");
const data = forms.dataset.label.split("_");
const valueCheck = data.reduce((a, c, i) => {
  if (i !== data.length - 1) a.push(false);
  return a;
}, []);

const bottom = (btn) => {
  return `
      <div class="">
          <button class='${btn.className} btn'>${btn.text}</button>
      </div>
      <div class="simple">
          <p>간편 로그인하기</p>
          <div class="icon_box">
              <a href="https://www.google.com/">
                  <img src="./img/google_icon.png" alt="google_login" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                  <img src="./img/kakao_icon.png" alt="kakao_login" />
              </a>
          </div>
      </div>
  `;
};
const seePwImg = (src) => {
  return `<img src="${src}" />`;
};

const result = data.reduce((a, c, i) => {
  if (i === data.length - 1) {
    if (window.location.pathname.includes("login")) {
      let btn = bottom({ className: "login_btn", text: "로그인" });
      btn += `
        <p class="link">
            판다마켓이 처음이신가요?
            <a href="./signup.html"> 회원가입 </a>
        </p>
        `;
      a += btn;
    } else {
      let btn = bottom({ className: "signup_btn", text: "회원가입" });
      btn += `
        <p class="link">
            이미 회원이신가요?
            <a href="./login.html"> 로그인 </a>
        </p>
        `;

      a += btn;
    }
  } else {
    let pwIcon = "";
    let part = `${c}을`;
    let type = "text";
    let idName = "";
    switch (c) {
      case "이메일":
        idName = "email";
        break;
      case "비밀번호":
        idName = "password";
        break;
    }
    if (c.indexOf("비밀번호") !== -1) {
      pwIcon = `<a href="#" class="seePw">${seePwImg("./img/look.svg")}</a>`;
      type = "password";
      if (c.indexOf("확인") !== -1) {
        part = "비밀번호를 다시 한 번";
        idName = "password2";
      } else part = `${c}를`;
    }
    a += `
            <div class="conBox">
                <label for="${idName}">${c}</label>
                <div class="inputbox">
                    <input id="${idName}" type="${type}" placeholder="${part} 입력해주세요"data-err="${part} 입력해주세요" />
                    ${pwIcon}
                </div>
            </div>
        `;
  }
  return a;
}, "");

forms.innerHTML = result;

const inputBox = document.querySelectorAll(".inputbox");
const btn = document.querySelector(".btn");
const pw = document.querySelector('input[id="password"]');

// input event
inputBox.forEach((el, i) => {
  const input = el.children[0];

  // Focus
  input.addEventListener("focus", (e) => {
    const target = e.target;
    // target.value = "";
    const check = [...el.children]
      .map((v) => {
        return v.classList.value;
      })
      .includes("errMsg");
    if (check) el.lastElementChild.remove();
    el.classList.remove("err");
    el.classList.add("on");
  });

  // Focus Out
  input.addEventListener("blur", (e) => {
    const check = [...el.children]
      .map((v) => {
        return v.classList.value;
      })
      .includes("errMsg");
    const target = e.target;
    const label = target.parentElement.previousSibling.previousSibling;
    let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!!!target.value) {
      el.classList.add("err");
      errMsgs(target.dataset.err, el, !check);
      valueCheck[i] = false;
    } else if (
      !email_regex.test(target.value) &&
      label.getAttribute("for") === "email"
    ) {
      errMsgs("잘못된 이메일 형식입니다.", el, !!!label.children.length);
      valueCheck[i] = false;
    } else if (
      target.value.length < 8 &&
      label.getAttribute("for") === "password"
    ) {
      errMsgs("비밀번호를 8자이상 입력해주세요.", el, target.value.length <= 8);
      valueCheck[i] = false;
    } else if (
      label.getAttribute("for") === "password2" &&
      pw.value !== target.value
    ) {
      errMsgs(
        "비밀번호가 다릅니다.",
        el,
        target.value !== document.querySelector("#password").value
      );
      valueCheck[i] = false;
    } else {
      valueCheck[i] = true;
    }

    el.classList.remove("on");
  });

  // Input
  input.addEventListener("keyup", (e) => {
    const errMsgs = document.querySelectorAll(".errMsg");
    if (!!e.currentTarget.value && !!!errMsgs.length) valueCheck[i] = true;
    else valueCheck[i] = false;
    if (!valueCheck.includes(false) && pw.value.length >= 8)
      btn.classList.add("on");
    else btn.classList.remove("on");
  });
});

function errMsgs(text, el, condition) {
  el.classList.add("err");
  const errMsg = document.createElement("p");
  errMsg.classList.add("errMsg");
  errMsg.innerHTML = text;
  if (condition) el.append(errMsg);
}

//see pw
const seePw = document.querySelectorAll(".seePw");
seePw.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.parentElement;
    const inputTag = target.previousSibling.previousSibling;
    if (inputTag.type === "password") {
      target.innerHTML = seePwImg("./img/look2.svg");
      inputTag.type = "text";
    } else {
      target.innerHTML = seePwImg("./img/look.svg");
      inputTag.type = "password";
    }
  });
});
