const email_input = document.querySelectorAll('.input-Email');
const errorMessage = document.querySelector('.email-err');

let email_err = true;
let password_error = true;

const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
]

const butt = document.querySelector('button');

function button_disable() {
    if (email_err || password_error) {
        butt.disabled = true;
    } else {
        butt.disabled = false;
    }
}
// 이메일 input 에서 focus out 할때 적용
function inter1(e) {
    const Email_box = e.target.closest('.email-contain');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (e.target.classList.contains('input-Email')) {
        if (e.target.value === '') {
            errorMessage.textContent = '이메일을 다시 입력해주세요.';
            email_err = true;
        }
        if (e.target.value !== '' && !emailPattern.test(e.target.value)) {
            errorMessage.textContent = '잘못된 이메일 형식입니다.';
            email_err = true;
        }
        if (e.target.value !== '' && emailPattern.test(e.target.value)) {
            errorMessage.textContent = '';
            email_err = false;
        }

        if (Email_box) {
            Email_box.style.border = email_err ? '2px solid red' : '';
        }
        button_disable();
    }
}

email_input.forEach(function (box) {
    box.addEventListener("input", inter1);
    box.addEventListener("focusout", inter1);
    box.addEventListener("DOMContentLoaded", inter1);
});

function inter11(e) {
    const parentBox1 = e.target.parentElement;
    const nextSibling1 = parentBox1.nextElementSibling;

    if (true) {
        parentBox1.style.border = '2px solid #3692FF';
        nextSibling1.textContent = '';
    }
}

email_input.forEach(function (box) {
    box.addEventListener("click", inter11);
});

//비밀번호 input 에서 focus할때 적용

const password_input = document.querySelectorAll('.input-password');
const errorMessage_pw = document.querySelector('.pw-err');


function inter2(e) {
    const Password_box = e.target.closest('.password-contain');

    if (e.target.classList.contains('input-password')) {
        if (e.target.value === '') {
            errorMessage_pw.textContent = '비밀번호를 입력해주세요.';
            password_error = true;
        }
        if (e.target.value !== '' && e.target.value.length < 8) {
            errorMessage_pw.textContent = '비밀번호를 8자 이상 입력해주세요.';
            password_error = true;
        }
        if (e.target.value !== '' && e.target.value.length >= 8) {
            errorMessage_pw.textContent = '';
            password_error = false;
        }

        if (Password_box) {
            Password_box.style.border = password_error ? '2px solid red' : '';
        }
        button_disable();
    }
}

password_input.forEach(function (box) {
    box.addEventListener("focusout", inter2);
    box.addEventListener("input", inter2);
});

// 로그인 조건을 갖추고 로그인 버튼을 클릭하였을때 item.html로 이동해야한다.
butt.addEventListener('click', function () {
    if (butt.disabled === false) {
        const user = USER_DATA.find((el) => (el.email === email_input[0].value));
        if (user && ((user.email === email_input[0].value) && (user.password === password_input[0].value))) {
            console.log("123")
            window.location.href = "./item.html";
        }
        else {
            showCustomAlert("비밀번호가 일치하지 않습니다.");
        }
    }
})

const customAlert = document.querySelector('.customAlert');
const alertText = document.querySelector('.alertText');
const closeAlert = document.querySelector('.closeAlert');
const overlay = document.querySelector('.overlay');

function showCustomAlert(message) {
    alertText.textContent = message;
    customAlert.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

closeAlert.addEventListener('click', function () {
    customAlert.classList.add('hidden');
    overlay.classList.add('hidden');
});

// 아이콘 클릭했을때 어떤 패스워드를 작성했는지 확인할수있게하기

const pwIcons = document.querySelectorAll('.password-typechange-icon');

pwIcons.forEach(function (pwIcon) {
    pwIcon.addEventListener('click', function () {
        const input = pwIcon.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            pwIcon.style.backgroundImage = "url('../icon/pwicon2.svg')";
        } else {
            input.type = 'password';
            pwIcon.style.backgroundImage = "url('../icon/pwicon1.svg')";
        }
    });
});

// --------------


function inter11(e) {
    const parentBox1 = e.target.parentElement;
    const nextSibling1 = parentBox1.nextElementSibling;

    if (true) {
        parentBox1.style.border = '2px solid #3692FF';
        nextSibling1.textContent = '';
    }
}

email_input.forEach(function (box) {
    box.addEventListener("click", inter11);
});

// --------------------------------------------------------------------------
// 비밀번호 input을 클릭하면 테두리가 생김, 이미지를 클릭하면 패스워드의 type이 text,password 변경이 되며 input태그 클릭시 부모요소의 테두리가 변경되게 하였음
function inter12(e) {
    const parentBox = e.target.parentElement;
    const nextSibling = parentBox.nextElementSibling;


    if (true) {
        parentBox.style.border = '2px solid #3692FF';
        nextSibling.textContent = '';
        e.target.classList.remove('done');
    }
}

password_input.forEach(function (box) {
    box.addEventListener("click", inter12);
});

document.addEventListener('DOMContentLoaded', function () {
    email_input[0].value = '';
    email_err = true;
    button_disable();
});