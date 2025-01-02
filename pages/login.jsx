import React, { useState, useEffect } from "react";
import Link from "next/link";
import { authAPI } from "../lib/axios";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailAlert, setEmailAlert] = useState("");
  const [passwordAlert, setPasswordAlert] = useState("");
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const router = useRouter();

  // 페이지 접근 시 로컬 스토리지에서 토큰 확인
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      router.push("/market");
    }
  }, [router]);

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

  const loginSuccessMessage = "로그인 성공!\n중고마켓 페이지로 이동합니다.";

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!isLoginActive) return;

    try {
      const response = await authAPI.signIn({ email, password });
      if (response.status === 200) {
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken); // JWT 저장

        setModalMessage(loginSuccessMessage); // 성공 메시지 설정
        setIsModalOpen(true); // 모달 열기
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        // 서버 메시지 활용
        const errorMessage = data?.message || "알 수 없는 오류가 발생했습니다.";
        setModalMessage(errorMessage);

        // 상태 코드 로깅 (디버깅 용도)
        console.log(`Error ${status}: ${errorMessage}`);
      } else {
        setModalMessage("네트워크 오류가 발생했습니다.\n다시 시도해주세요.");
      }
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  // 모달이 닫힐 때 성공 메시지에 따라 페이지 이동
  useEffect(() => {
    if (!isModalOpen && modalMessage === loginSuccessMessage) {
      router.push("/market");
    }
  }, [isModalOpen, modalMessage, router]);

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
                  onClick={() => setEmail("")}
                  className={styles.clearBtn}
                >
                  X
                </button>
              )}
              {emailAlert && (
                <span className={styles.labelAlert}>{emailAlert}</span>
              )}
            </div>

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
                    onClick={() => setPassword("")}
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

        <div className={styles.signup}>
          판다마켓이 처음이신가요? <Link href="/signup">회원가입</Link>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <dialog
            className={styles.modalContent}
            open
            onClick={(e) => e.stopPropagation()}
          >
            <p style={{ whiteSpace: "pre-line" }}>{modalMessage}</p>
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
