const ida = document.querySelectorAll('.input-Email');
const errorMessage = document.querySelector('.email-err');

let email_err = true;
let password_error = true;


// 이메일 input 에서 focus out 할때 적용
function inter1(e) {
    if (e.target.classList.contains('input-Email')) {
        if (e.target.value === '') {
            e.target.classList.add('done');
            errorMessage.textContent = '이메일을 다시 입력해주세요.';
            email_err = true;
        }
        else if (!e.target.value.includes('@')) {
            e.target.classList.add('done');
            errorMessage.textContent = '잘못된 이메일 형식입니다.';
            email_err = true;
        }
        else {
            e.target.classList.remove('done');
            errorMessage.textContent = '';
            email_err = false;
        }
        button_disable();
    }
}

ida.forEach(function (box) {
    box.addEventListener("focusout", inter1);
});

//비밀번호 input 에서 focus할때 적용

const pwa = document.querySelectorAll('.input-password');
const errorMessage_pw = document.querySelector('.pw-err');

function inter2(e) {
    if (e.target.classList.contains('input-password')) {
        if (e.target.value === '') {
            e.target.classList.add('done');
            errorMessage_pw.textContent = '비밀번호를 입력해주세요.';
            password_error = true;
        } else if (e.target.value.length < 8) {
            e.target.classList.add('done');
            errorMessage_pw.textContent = '비밀번호를 8자 이상 입력해주세요.';
            password_error = true;
        }
        else {
            e.target.classList.remove('done');
            errorMessage_pw.textContent = '';
            password_error = false;
        }
        button_disable();
    }
}

pwa.forEach(function (box) {
    box.addEventListener("focusout", inter2);
});


// input 에 빈 값이 있거나, 에러메시지가 있으면 '로그인'버튼이 비활성화 된다.....

const butt = document.querySelector('button');

function button_disable() {
    if (email_err || password_error) {
        butt.disabled = true;
    } else {
        butt.disabled = false;
    }
}

// 로그인 조건을 갖추고 로그인 버튼을 클릭하였을때 item.html로 이동해야한다.
butt.addEventListener('click', function() {
    if(butt.disabled === false) {
        window.location.href = "./item.html";
    }
})


// 아이콘 클릭했을때 어떤 패스워드를 작성했는지 확인할수있게하기

const pwInput = document.querySelector('.pw-img');


pwInput.addEventListener('click', function() {
    if (pwInput.type === 'password') {
        pwInput.type = 'text';
    } else {
        pwInput.type = 'password';
    }
})

