const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
  { email: "test@test.com", password: "sodds1346" },
];

const addEl = (
  props = {
    el: "div",
    className: "",
    text: "",
    append: null,
  }
) => {
  const newEl = document.createElement(props.el);
  if (!!props.className) newEl.classList.add(props.className);
  if (!!props.text) newEl.innerHTML = props.text;
  if (!!props.append) props.append.appendChild(newEl);
  return newEl;
};

const modal = (text, event) => {
  const modalCover = addEl({
    el: "div",
    className: "modalCover",
    append: document.body,
  });
  const modal = addEl({
    el: "div",
    className: "modal",
    append: modalCover,
  });
  const modalText = addEl({
    el: "p",
    text,
    append: modal,
  });
  const modalBtn = addEl({
    el: "button",
    text: "확인",
    append: modal,
  });
  modalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (event) event();
    else {
      modalCover.remove();
    }
  });
};

// login event
const loginBtn = document.querySelector(".btn");
const formInput = document.querySelectorAll("#forms input");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  let { emailPass, pwPass, pw2Pass } = {
    emailPass: false,
    pwPass: false,
    pw2Pass: false,
  };
  console.log(emailPass, pwPass);
  const inputs = [...formInput];
  if (target.classList.value.includes("on")) {
    switch (inputs.length) {
      case 2:
        inputs.map((v, i) => {
          USER_DATA.forEach((user) => {
            switch (v.id) {
              case "email":
                if (user.email === v.value) emailPass = true;
                break;
              case "password":
                if (user.password === v.value) pwPass = true;
                break;
            }
          });
        });

        if (!emailPass || !pwPass)
          modal("아이디 또는 비밀번호를 확인해주세요.");
        else {
          console.log("로그인 성공!~");
          window.location.href = "/items.html";
        }

        break;
      case 4:
        inputs.map((v, i) => {
          switch (v.id) {
            case "email":
              const filter = USER_DATA.filter(
                (user) => user.email === emailPass
              );
              if (!!filter.length) modal("중복된 아이디입니다.");
              else emailPass = true;
              break;
            case "password2":
              if (v.value === document.querySelector("#password").value)
                pw2Pass = true;
              break;
          }
        });
        if (emailPass && pw2Pass) window.location.href = "./login.html";
        else modal("입력하신 정보를 다시 확인해주세요.");
        break;
    }
  }
});
