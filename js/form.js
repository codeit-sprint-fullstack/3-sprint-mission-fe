const forms = document.querySelector("#forms");
const data = forms.dataset.label.split("_");
const valueCheck = data.reduce((a, c, i) => {
  if (i !== data.length - 1) a.push(false);
  return a;
}, []);

let bottom = `
    <div>
        <button class='btn'>로그인</button>
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

const result = data.reduce((a, c, i) => {
  if (i === data.length - 1) {
    if (window.location.pathname.includes("login"))
      bottom += `
        <p class="link">
            판다마켓이 처음이신가요?
            <a href="./signup.html"> 회원가입 </a>
        </p>
        `;
    else
      bottom += `
        <p class="link">
            이미 회원이신가요?
            <a href="./login.html"> 로그인 </a>
        </p>
        `;
    a += bottom;
  } else {
    let pwIcon = "";
    let part = `${c}을`;
    let type = "text";

    if (c.indexOf("비밀번호") !== -1) {
      pwIcon = `<a href="#"><img src="./img/look.png" /></a>`;
      type = "password";
      if (c.indexOf("확인") !== -1) part = "비밀번호를 다시 한 번";
      else part = `${c}를`;
    }
    a += `
            <div>
                <label for="${c}">${c}</label>
                <div class="inputbox">
                    <input id="${c}" type="${type}" placeholder="${part} 입력해주세요" />
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
inputBox.forEach((el, i) => {
  const input = el.children[0];
  input.addEventListener("focus", () => el.classList.add("on"));
  input.addEventListener("blur", () => el.classList.remove("on"));
  input.addEventListener("keyup", (e) => {
    if (!!e.currentTarget.value) valueCheck[i] = true;
    else valueCheck[i] = false;

    if (!valueCheck.includes(false)) btn.classList.add("on");
    else btn.classList.remove("on");
  });
});
