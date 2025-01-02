import React, { useState, useEffect } from "react";
import Link from "next/link";
import { authAPI } from "../lib/axios";
import { useRouter } from "next/router";
import styles from "../styles/Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [nicknameAlert, setNicknameAlert] = useState("");
  const [passwordAlert, setPasswordAlert] = useState("");
  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState("");
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    const isEmailValid = validateEmail(email);
    const isNicknameValid = nickname.length > 0;
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = password === confirmPassword;

    setIsSignupActive(
      isEmailValid && isNicknameValid && isPasswordValid && doPasswordsMatch
    );
  }, [email, nickname, password, confirmPassword]);

  const signupSuccessMessage = "회원가입 성공!\n중고마켓 페이지로 이동합니다.";

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (isSignupActive) {
      const signupData = {
        email,
        nickname,
        password,
        passwordConfirmation: confirmPassword,
      };

      try {
        const response = await authAPI.signUp(signupData);
        // console.log(response);
        if (response.status === 201) {
          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken); // JWT 저장

          setModalMessage(signupSuccessMessage);
          setIsModalOpen(true);
        }
      } catch (error) {
        if (error.response) {
          const { status, data } = error.response;

          // 서버 메시지 활용
          const errorMessage =
            data?.message || "알 수 없는 오류가 발생했습니다.";
          setModalMessage(errorMessage);

          // 상태 코드 로깅 (디버깅 용도)
          console.log(`Error ${status}: ${errorMessage}`);
        } else {
          // 네트워크 오류 처리
          setModalMessage("네트워크 오류가 발생했습니다.\n다시 시도해주세요.");
        }
        setIsModalOpen(true);
      }
    }
  };

  const closeModal = () => setIsModalOpen(false); // 모달 닫기

  // 모달이 닫힐 때 로그인 페이지로 이동
  useEffect(() => {
    if (!isModalOpen && modalMessage === signupSuccessMessage) {
      router.push("/market");
    }
  }, [isModalOpen, modalMessage, router]);

  return (
    <div className={styles.container}>
      <header className={styles.signupHeader}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <h1 className={styles.blind}>판다마켓</h1>
          </Link>
        </div>
      </header>
      <div className={styles.signupWrap}>
        <form onSubmit={handleSignupSubmit} className={styles.signupForm}>
          <div className={styles.signupBox}>
            {/* 이메일 */}
            <div className={styles.inputItem}>
              <label className={styles.textLabel}>이메일</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (!email) setEmailAlert("이메일을 입력해주세요.");
                  else if (!validateEmail(email))
                    setEmailAlert("잘못된 이메일 형식입니다.");
                  else setEmailAlert("");
                }}
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

            {/* 닉네임 */}
            <div className={styles.inputItem}>
              <label className={styles.textLabel}>닉네임</label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                onBlur={() =>
                  setNicknameAlert(nickname ? "" : "닉네임을 입력해주세요.")
                }
                placeholder="닉네임을 입력해주세요"
                className={styles.inputId}
                tabIndex={2}
              />
              {nickname && (
                <button
                  type="button"
                  onClick={() => setNickname("")}
                  className={styles.clearBtn}
                >
                  X
                </button>
              )}
              {nicknameAlert && (
                <span className={styles.labelAlert}>{nicknameAlert}</span>
              )}
            </div>

            {/* 비밀번호 */}
            <div className={styles.inputItem}>
              <label className={styles.textLabel}>비밀번호</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() =>
                  setPasswordAlert(
                    !password
                      ? "비밀번호를 입력해주세요."
                      : !validatePassword(password)
                      ? "비밀번호를 8자 이상 입력해주세요."
                      : ""
                  )
                }
                placeholder="비밀번호를 입력해주세요"
                className={styles.inputPw}
                tabIndex={3}
              />
              {password && (
                <>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
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

            {/* 비밀번호 확인 */}
            <div className={styles.inputItem}>
              <label className={styles.textLabel}>비밀번호 확인</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() =>
                  setConfirmPasswordAlert(
                    !confirmPassword
                      ? "비밀번호를 입력해주세요."
                      : confirmPassword !== password
                      ? "비밀번호가 일치하지 않습니다."
                      : ""
                  )
                }
                placeholder="비밀번호를 다시 입력해주세요"
                className={styles.inputPw}
                tabIndex={4}
              />
              {confirmPassword && (
                <>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.showPw}
                    style={{
                      backgroundImage: `url(/${
                        showPassword ? "show-pw" : "hide-pw"
                      }.png)`,
                    }}
                  ></button>
                  <button
                    type="button"
                    onClick={() => setConfirmPassword("")}
                    className={styles.clearBtn}
                  >
                    X
                  </button>
                </>
              )}
              {confirmPasswordAlert && (
                <span className={styles.labelAlert}>
                  {confirmPasswordAlert}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`${styles.btnSignup} ${
                isSignupActive ? styles.active : ""
              }`}
              disabled={!isSignupActive}
              tabIndex={5}
            >
              회원가입
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
        <div className={styles.login}>
          이미 회원이신가요? <Link href="/login">로그인</Link>
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

export default Signup;
