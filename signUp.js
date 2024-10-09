
//-------------------------회원가입 input 에러---------------------------------//

// 인풋 id 가져오기
const emailInput = document.getElementById("emailInput");
const nicknameInput = document.getElementById("nicknameInput");
const pwInput = document.getElementById("pwInput");
const pwCheckInput = document.getElementById("pwCheckInput");

// 에러 span id 가져오기
const emailError = document.getElementById("emailError");
const nicknameError = document.getElementById("nicknameError");
const pwError = document.getElementById("pwError");
const pwCheckError = document.getElementById("pwCheckError");

//---------------이메일 에러 메세지, errorBorder 함수------------------------//

function checkEmailForm() {
    const emailValue = emailInput.value.trim();
    // 이메일 정규식
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //값이 없을 때
    if (emailValue === '') {
        emailError.textContent = "이메일을 입력해주세요";
        emailError.style.display = "inline";
        emailInput.classList.add("errorBorder");
        // 이메일 정규식을 비교하는 test 함수 이메일 값과 비교한다
    } else if (!emailPattern.test(emailValue)) {
        emailError.textContent = "잘못된 이메일 형식입니다.";
        emailError.style.display = "inline";
        emailInput.classList.add("errorBorder");
        // 빈칸이 아니고 형식이 잘 맞으면 원래대로
    } else {
        emailError.style.display = "none";
        emailInput.classList.remove("errorBorder");
    }
    // 회원가입 버튼 활성화 여부
    checkSignUpForm();
}
//---------------nickname 에러 메세지, errorBorder 함수--------------------//

function nicknameCheckForm() {
    const nickname = nicknameInput.value.trim();
    if (nickname === '') {
        nicknameError.textContent = "닉네임을 입력해주세요";
        nicknameError.style.display = "inline";
        nicknameInput.classList.add("errorBorder");
    } else {
        nicknameError.style.display = "none";
        nicknameInput.classList.remove("errorBorder");
    }
    // 회원가입 버튼 활성화 여부
    checkSignUpForm();
}

//-------------------pw 에러 메세지, errorBorder 함수----------------------//

function checkPwForm() {
    const pwValue = pwInput.value.trim();
    if (pwValue === '') {
        pwError.textContent = "비밀번호를 입력해주세요";
        pwError.style.display = "inline";
        pwInput.classList.add("errorBorder");
    } else if (pwValue.length < 8) {
        pwError.textContent = "비밀번호를 8자 이상 입력해주세요";
        pwError.style.display = "inline";
        pwCheckInput.classList.add("errorBorder");
    } else {
        pwError.style.display = "none";
        pwInput.classList.remove("errorBorder");
    }
    // 회원가입 버튼 활성화 여부
    checkSignUpForm();
}

//-------------------pwCheck 에러 메세지, errorBorder 함수---------------------//

function checkPwCheckForm() {
    const pwValue = pwInput.value.trim();
    const pwCheckValue = pwCheckInput.value.trim();
    if (pwCheckValue !== pwValue) {
        pwCheckError.textContent = "비밀번호가 일치하지 않습니다.";
        pwCheckError.style.display = "inline";
        pwInput.classList.add("errorBorder");
    } else {
        pwCheckError.style.display = "none";
        pwCheckInput.classList.remove("errorBorder");
    }
    // 회원가입 버튼 활성화 여부
    checkSignUpForm();
}

//--------------------------회원가입 형식 맞는지 확인 함수-------------------------//
// 버튼 id, 스타일 클래스 가져오기
const signUpBt = document.getElementById("signUpBt");
const signUpBtStyle = document.getElementById("likeBtA");
function checkSignUpForm() {
    // 이메일, 닉네임, 비밀번호와 비밀번호 확인 의 에러 메세지의 display가 none이고 값이 있을 때 true 
    const isEmailValid = emailError.style.display === "none" && emailInput.value.trim() !== '';
    const isNicknameValid = nicknameError.style.display === "none" && nicknameInput.value.trim() !== '';
    const isPwValid = pwError.style.display === "none" && pwInput.value.trim() !== '';
    const isPwCheckValid = pwCheckError.style.display === "none" && pwCheckInput.value.trim() !== '';
    // 넷 다 true이면 버튼 활성화
    if (isEmailValid && isNicknameValid && isPwValid && isPwCheckValid) {
        signUpBt.style.pointerEvents = "auto";
        signUpBtStyle.style.backgroundColor = "#3692FF";
    } else {
        signUpBt.style.pointerEvents = "none";
        signUpBtStyle.style.backgroundColor = "#9CA3AF";
    }
}
//---------------------------이벤트 리스너 등록-----------------------------//

emailInput.addEventListener("blur", checkEmailForm); // 이메일 에러
nicknameInput.addEventListener("blur", nicknameCheckForm); // 닉네임 에러
pwInput.addEventListener("blur", checkPwForm); // pw 에러
pwCheckInput.addEventListener("blur", checkPwCheckForm); // pwcheck 에러 

//------------------------회원 ID,PW 임시 DB-------------------------------//
const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
]

//--------------------------회원가입 여부----------------------------------------//
const modalText = document.getElementById("modalText");
const modal = document.getElementById("modal");

function signUpCheck() {
    // 회원가입 버튼 클릭할 때 입력된 이메일 값 가져오기 
    const enteredEmail = emailInput.value.trim();

    // db에서 찾는 이메일이 이미 존재하는지 확인
    // find 함수 사용 -> 값이 있으면 isUser에 저장
    const isUser = USER_DATA.find(
        userDataObj => userDataObj.email === enteredEmail);
    // 값이 있으면 true
    if (isUser) {
        modal.style.display = "block";
        modalText.textContent = "사용 중인 이메일입니다";
    } else {
        modal.style.display = "block";
        modalText.textContent = "회원가입 성공! 로그인 창으로 이동합니다~"
    }
}
signUpBt.addEventListener("click", signUpCheck);

//-------모달 버튼 닫으면 생기는 이벤트-성공하면 링크로 이동 실패하면 걍 모달 닫기-----//
const modalBt = document.getElementById("modalBt");

function closeModal(e) {
    if (modalText.textContent === "사용 중인 이메일입니다") {
        modal.style.display = "none";
        e.preventDefault();

    } else {
        location.href = 'login.html';
    }
}

modalBt.addEventListener("click", closeModal);



//----------------------비밀번호 보이기 && 눈 아이콘 변경----------------------//

// 아이콘 ID 불러오기
const eyeIcon = document.getElementById("eyeIcon");
// input의 타입이 password이면 text로 바꾸고 반대면 password로 바꾸기
// 아이콘 눈 모양 슬래쉬 바꾸기
function pwShow() {

    if (pwInput.type === "password") {
        pwInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        pwInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    }

}
eyeIcon.addEventListener("click", pwShow);

