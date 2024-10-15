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
const confirmPasswordErrorMessage = document.getElementById('confirm-password-error-message');
const loginButton = document.getElementById('loginButton');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateInputs() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const passwordIsValid = passwordValue.length >= 8;
    const emailIsValid = emailPattern.test(emailValue) && emailValue !== '';

    if (emailIsValid && passwordIsValid && passwordValue === confirmPasswordInput.value.trim()) {
        loginButton.classList.add('active');
        loginButton.disabled = false;
    } else {
        loginButton.classList.remove('active');
        loginButton.disabled = true; 
    }
}

emailInput.addEventListener('input', validateInputs);
passwordInput.addEventListener('input', validateInputs);
confirmPasswordInput.addEventListener('input', validateInputs);


emailInput.addEventListener('input', function(e) {
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
passwordInput.addEventListener('input', function(e) {
    const passwordValue = passwordInput.value.trim();

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

function validatePasswordMatch() {
    if (passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value !== '') {
        confirmPasswordInput.classList.remove('error');
        confirmPasswordErrorMessage.style.display = 'none'; 
    } else {
        confirmPasswordInput.classList.add('error');
        confirmPasswordErrorMessage.style.display = 'block';
    }
}

passwordInput.addEventListener('input', validatePasswordMatch);
confirmPasswordInput.addEventListener('input', validatePasswordMatch);

loginButton.addEventListener('click', function() {
    const emailValue = emailInput.value.trim();
    
    const emailExists = USER_DATA.some(user => user.email === emailValue);
    
    if (emailExists) {
        alert('사용 중인 이메일입니다.');
    } else {
        alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
        window.location.href = "login.html"; 
    }
});