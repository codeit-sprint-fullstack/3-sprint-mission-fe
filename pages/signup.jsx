import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    const isEmailValid = validateEmail(email);
    const isNicknameValid = nickname.length > 0;
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = password === confirmPassword;
    const isEmailAvailable = !USER_DATA.some((data) => data.email === email);

    setIsSignupActive(
      isEmailValid &&
        isNicknameValid &&
        isPasswordValid &&
        doPasswordsMatch &&
        isEmailAvailable
    );
  }, [email, nickname, password, confirmPassword]);

  const handleClear = (field) => {
    if (field === "email") setEmail("");
    if (field === "nickname") setNickname("");
    if (field === "password") setPassword("");
    if (field === "confirmPassword") setConfirmPassword("");
  };

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

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);

    if (nicknameAlert === "닉네임을 입력해주세요." && newNickname !== "") {
      setNicknameAlert("");
    }
  };

  const handleNicknameBlur = () => {
    if (nickname === "") {
      setNicknameAlert("닉네임을 입력해주세요.");
    } else {
      setNicknameAlert("");
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

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (
      confirmPasswordAlert === "비밀번호를 입력해주세요." &&
      newConfirmPassword !== ""
    ) {
      setConfirmPasswordAlert("");
    }
    if (
      confirmPasswordAlert === "비밀번호가 일치하지 않습니다." &&
      newConfirmPassword === password
    ) {
      setConfirmPasswordAlert("");
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (confirmPassword === "") {
      setConfirmPasswordAlert("비밀번호를 입력해주세요.");
    } else if (confirmPassword !== password) {
      setConfirmPasswordAlert("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordAlert("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (isSignupActive) {
      console.log("회원가입 성공!");
      window.location.href = "/login";
    }
  };

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
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder="이메일을 입력해주세요"
                className={styles.inputId}
                tabIndex={1}
              />
              {email && (
                <button
                  type="button"
                  onClick={() => handleClear("email")}
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
                onChange={handleNicknameChange}
                onBlur={handleNicknameBlur}
                placeholder="닉네임을 입력해주세요"
                className={styles.inputId}
                tabIndex={2}
              />
              {nickname && (
                <button
                  type="button"
                  onClick={() => handleClear("nickname")}
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
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                placeholder="비밀번호를 입력해주세요"
                className={styles.inputPw}
                tabIndex={3}
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
                    onClick={() => handleClear("password")}
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
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onBlur={handleConfirmPasswordBlur}
                placeholder="비밀번호를 다시 입력해주세요"
                className={styles.inputPw}
                tabIndex={4}
              />
              {confirmPassword && (
                <>
                  <button
                    type="button"
                    onClick={toggleShowConfirmPassword}
                    className={styles.showPw}
                    style={{
                      backgroundImage: `url(/${
                        showConfirmPassword ? "show-pw" : "hide-pw"
                      }.png)`,
                    }}
                  ></button>
                  <button
                    type="button"
                    onClick={() => handleClear("confirmPassword")}
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
    </div>
  );
};

export default Signup;
