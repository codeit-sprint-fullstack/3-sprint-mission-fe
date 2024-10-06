const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
];

const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const passwordInput = document.getElementById('pass');
const passwordErrorMessage = document.getElementById('password-error-message');
const confirmPasswordInput = document.querySelector('.confirm-pass'); 
const loginButton = document.getElementById('loginButton');

const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function validateInputs() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const emailIsValid = emailPattern.test(emailValue) && emailValue !== '';
    const passwordIsValid = passwordValue.length >= 8;

    if (emailIsValid && passwordIsValid) {
        loginButton.classList.add('active');
    } else {
        loginButton.classList.remove('active');
    }
}

emailInput.addEventListener('focusout', function(e) {
    const emailValue = e.target.value.trim();

    if (emailValue === '') {
        e.target.classList.add('error'); 
        errorMessage.style.display = 'block'; 
        errorMessage.textContent = '이메일을 입력해주세요'; 
    } else if (emailPattern.test(emailValue)) {
        e.target.classList.remove('error'); 
        errorMessage.style.display = 'none';
    } else {
        e.target.classList.add('error');
        errorMessage.style.display = 'block'; 
        errorMessage.textContent = '잘못된 이메일 형식입니다'; 
    }
});
passwordInput.addEventListener('focusout', function(e) {
    const passwordValue = e.target.value.trim();

    const isValidPassword = passwordValue.length >= 8; 

    if (passwordValue === '') {
        e.target.classList.add('error'); 
        passwordErrorMessage.style.display = 'block'; 
        passwordErrorMessage.textContent = '비밀번호를 입력해 주세요.';
    } else if (!isValidPassword) {
        e.target.classList.add('error');
        passwordErrorMessage.style.display = 'block'; 
        passwordErrorMessage.textContent = '비밀번호는 8자 이상이어야 합니다.';
    } else {
        e.target.classList.remove('error');
        passwordErrorMessage.style.display = 'none'; 
    }
    validateInputs();
});

loginButton.addEventListener('click', function(e) {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    const user = USER_DATA.find(user => user.email === emailValue);

    if (!user) {
        alert('이메일이 존재하지 않습니다.');
    } else if (user.password !== passwordValue) {
        alert('비밀번호가 일치하지 않습니다.');
    } else {
        window.location.href = '/items';
    }
});


loginButton.classList.remove('active');
