import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailAlert, setEmailAlert] = useState("");
  const [passwordAlert, setPasswordAlert] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false); // 비밀번호 포커스 여부 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);

  const USER_DATA = [
    { email: "codeit1@codeit.com", password: "codeit101!" },
    { email: "codeit2@codeit.com", password: "codeit202!" },
    { email: "codeit3@codeit.com", password: "codeit303!" },
    { email: "codeit4@codeit.com", password: "codeit404!" },
    { email: "codeit5@codeit.com", password: "codeit505!" },
    { email: "codeit6@codeit.com", password: "codeit606!" },
  ];

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  useEffect(() => {
    setIsLoginActive(validateEmail(email) && validatePassword(password));
  }, [email, password]);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (emailAlert === "이메일을 입력해주세요." && newEmail !== "") {
      setEmailAlert("");
    }
    if (emailAlert === "잘못된 이메일 형식입니다." && validateEmail(newEmail)) {
      setEmailAlert("");
    }
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true); // 이메일 포커스 아웃 상태 설정
    if (email === "") {
      setEmailAlert("이메일을 입력해주세요.");
    } else if (!validateEmail(email)) {
      setEmailAlert("잘못된 이메일 형식입니다.");
    } else {
      setEmailAlert("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (passwordAlert === "비밀번호를 입력해주세요." && newPassword !== "") {
      setPasswordAlert("");
    }
    if (
      passwordAlert === "비밀번호를 8자 이상 입력해주세요." &&
      validatePassword(newPassword)
    ) {
      setPasswordAlert("");
    }
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true); // 비밀번호 포커스 아웃 상태 설정
    if (password === "") {
      setPasswordAlert("비밀번호를 입력해주세요.");
    } else if (!validatePassword(password)) {
      setPasswordAlert("비밀번호를 8자 이상 입력해주세요.");
    } else {
      setPasswordAlert("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClearEmail = () => {
    setEmail("");
    setEmailAlert(""); // 이메일 경고 메시지 초기화
    setIsEmailTouched(false); // 이메일 터치 상태 초기화
  };

  const handleClearPassword = () => {
    setPassword("");
    setPasswordAlert(""); // 비밀번호 경고 메시지 초기화
    setIsPasswordTouched(false); // 비밀번호 터치 상태 초기화
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!isLoginActive) return;

    const user = USER_DATA.find((data) => data.email === email);
    if (user && user.password === password) {
      window.location.href = "/market";
    } else {
      setIsModalOpen(true); // 모달 열기
    }
  };

  const closeModal = () => setIsModalOpen(false); // 모달 닫기

  return (
    <div className={styles.container}>
      <header className={styles.loginHeader}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <h1 className={styles.blind}>판다마켓</h1>
          </Link>
        </div>
      </header>
      <div className={styles.loginWrap}>
        <form onSubmit={handleLoginSubmit} className={styles.loginForm}>
          <div className={styles.loginBox}>
            {/* 이메일 입력 */}
            <div className={styles.inputItem}>
              <label className={styles.textLabel}>이메일</label>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder="이메일을 입력해주세요"
                className={styles.inputId}
                tabIndex={1}
              />
              {email && (
                <button
                  type="button"
                  onClick={handleClearEmail}
                  className={styles.clearBtn}
                >
                  X
                </button>
              )}
              {emailAlert && (
                <span className={styles.labelAlert}>{emailAlert}</span>
              )}
            </div>

            {/* 비밀번호 입력 */}
            <div className={styles.inputItem}>
              <label className={styles.textLabel}>비밀번호</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                placeholder="비밀번호를 입력해주세요"
                className={styles.inputPw}
                tabIndex={2}
              />
              {password && (
                <>
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className={styles.showPw}
                    style={{
                      backgroundImage: `url(/${
                        showPassword ? "show-pw" : "hide-pw"
                      }.png)`,
                    }}
                  ></button>
                  <button
                    type="button"
                    onClick={handleClearPassword}
                    className={styles.clearBtn}
                  >
                    X
                  </button>
                </>
              )}
              {passwordAlert && (
                <span className={styles.labelAlert}>{passwordAlert}</span>
              )}
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              className={`${styles.btnLogin} ${
                isLoginActive ? styles.active : ""
              }`}
              disabled={!isLoginActive}
              tabIndex={3}
            >
              로그인
            </button>
          </div>
        </form>
        {/* 간편 로그인 */}
        <div className={styles.snsLogin}>
          <p>간편 로그인하기</p>
          <div className={styles.snsLink}>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.google}
            ></a>
            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.kakao}
            ></a>
          </div>
        </div>
        {/* 회원가입 링크 */}
        <div className={styles.signup}>
          판다마켓이 처음이신가요? <Link href="/signup">회원가입</Link>
        </div>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <dialog
            className={styles.modalContent}
            open
            onClick={(e) => e.stopPropagation()}
          >
            <p>비밀번호가 일치하지 않습니다.</p>
            <button
              onClick={closeModal}
              className={styles.modalButton}
              autoFocus
            >
              확인
            </button>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default Login;