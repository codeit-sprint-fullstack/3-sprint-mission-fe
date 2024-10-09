const input_email = document.querySelectorAll('.input-Email');
const errorMessage = document.querySelector('.email-err');

let email_err = true;
let nickname_err = true;
let password_error = true;
let password_error_re = true;

const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
]

// 이메일 input 에서 focus out 할때 적용
function inter1(e) {
    const Email_box = e.target.closest('.Email_box');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (e.target.classList.contains('input-Email')) {
        if (e.target.value === '') {
            errorMessage.textContent = '이메일을 다시 입력해주세요.';
            email_err = true;
        }
        else if (!emailPattern.test(e.target.value)) { 
            errorMessage.textContent = '잘못된 이메일 형식입니다.';
            email_err = true;
        }
        else {
            errorMessage.textContent = '';
            email_err = false;
        }
        if (Email_box) {
            if (email_err) {
                Email_box.style.border = '2px solid red';
            } else {
                Email_box.style.border = '';
            }
        }
        button_disable();
    }
}

input_email.forEach(function (box) {
    box.addEventListener("input", inter1);
    box.addEventListener("focusout", inter1);
});

function inter11(e) {
    const parentBox1 = e.target.parentElement;
    const nextSibling1 = parentBox1.nextElementSibling;

    if (true) {
        parentBox1.style.border = '2px solid #3692FF';
        nextSibling1.textContent = '';
    }
}

input_email.forEach(function (box) {
    box.addEventListener("click", inter11);
});


//-------------------닉네임
const nickname = document.querySelectorAll('.User-name');
const nicknameMessage = document.querySelector('.nick-err');

function inter123(e) {
    const Username_box = e.target.closest('.Username_box');

    if (e.target.classList.contains('User-name')) {
        if (e.target.value === '') {
            nicknameMessage.textContent = '닉네임을 다시 입력해주세요.';
            nickname_err = true;
        } else {
            nickname_err = false;
        }
        if (Username_box) {
            if (nickname_err) {
                Username_box.style.border = '2px solid red';
            } else {
                Username_box.style.border = '';
            }
        }
        button_disable();
    }
}


nickname.forEach(function (box) {
    box.addEventListener("input", inter123);
    box.addEventListener("focusout", inter123);
});


function inter1234(e) {
    const parentBox3 = e.target.parentElement;
    const nextSibling3 = parentBox3.nextElementSibling;

    if (true) {
        parentBox3.style.border = '2px solid #3692FF';
        nextSibling3.textContent = '';
    }
}

nickname.forEach(function (box) {
    box.addEventListener("click", inter1234);
});


//비밀번호 input 에서 focus할때 적용

const input_password = document.querySelectorAll('.input-password');
const errorMessage_pw = document.querySelector('.password_err');


function inter2(e) {
    const Password_box = e.target.closest('.Password_box');

    if (e.target.classList.contains('input-password')) {
        if (e.target.value === '') {
            errorMessage_pw.textContent = '비밀번호를 입력해주세요.';
            password_error = true;
        } else if (e.target.value.length < 8) {
            console.log(input_password.textContent);
            errorMessage_pw.textContent = '비밀번호를 8자 이상 입력해주세요.';
            password_error = true;
        }
        else {
            errorMessage_pw.textContent = '';
            password_error = false;
        }

        if (Password_box) {
            if (password_error) {
                Password_box.style.border = '2px solid red';
            } else {
                Password_box.style.border = '';
            }
        }
        button_disable();
    }
}

input_password.forEach(function (box) {
    box.addEventListener("input", inter2);
    box.addEventListener("focusout", inter2);
});



function inter12(e) {
    const parentBox1 = e.target.parentElement;
    const nextSibling1 = parentBox1.nextElementSibling;

    if (true) {
        parentBox1.style.border = '2px solid #3692FF';
        nextSibling1.textContent = '';
    }
}

input_password.forEach(function (box) {
    box.addEventListener("click", inter12);
});


//-패스워드 재검토 부분---------------------------------------------------------


const input_password_re = document.querySelectorAll('.input-password-re');
const errorMessage_pw_re = document.querySelector('.password_re_err');

function inter3(e) {
    const Password_box1 = e.target.closest('.Password_box');

    console.log(e.target.value);
    if (e.target.classList.contains('input-password-re')) {
        if (e.target.value === '') {
            errorMessage_pw_re.textContent = '비밀번호를 입력해주세요.';
            password_error_re = true;
        } else if (e.target.value.length < 8) {
            errorMessage_pw_re.textContent = '비밀번호를 8자 이상 입력해주세요.';
            password_error_re = true;
        } else if (e.target.value !== input_password[0].value) {
            errorMessage_pw_re.textContent = '비밀번호가 일치하지 않습니다.';
            password_error_re = true;
        } else  {
            errorMessage_pw_re.textContent = '';
            password_error_re = false;
        }

        if (Password_box1) {
            if (password_error_re) {
                Password_box1.style.border = '2px solid red';
            } else {
                Password_box1.style.border = '';
            }
        }
        console.log("버튼");
        button_disable();
    }
}

input_password_re.forEach(function (box) {
    box.addEventListener("input", inter3);
    box.addEventListener("focusout", inter3);
});




function inter112(e) {
    const parentBox2 = e.target.parentElement;
    const nextSibling2 = parentBox2.nextElementSibling;

    if (true) {
        parentBox2.style.border = '2px solid #3692FF';
        nextSibling2.textContent = '';
    }
}

input_password_re.forEach(function (box) {
    box.addEventListener("click", inter112);
});

//------패스워드 변경------------------------------------------------------------- 

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

//----------------------------------------------------
const butt = document.querySelector('button');

function button_disable() {
    if (email_err || password_error || password_error_re) {
        butt.disabled = true;
    } else {
        butt.disabled = false;
    }
}

// 로그인 조건을 갖추고 로그인 버튼을 클릭하였을때 item.html로 이동해야한다.

butt.addEventListener('click', function () {
    if (butt.disabled === false) {
        const user = USER_DATA.find((el) => (el.email === input_email[0].value));
        if(user && user.email === input_email[0].value) {
            showCustomAlert("사용중인 이메일입니다.");
        }
        else {
            window.location.href = "./login.html";
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

// ---------------------------



