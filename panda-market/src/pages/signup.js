import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Signup.module.css";

export default function Signup() {
  const router = useRouter();

  // 상태 관리
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 비밀번호 보이기/숨기기 토글 함수
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // 회원가입 요청 함수
  const handleSignup = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          nickname: nickname.trim(),
          password: password.trim(),
          passwordConfirmation: confirmPassword.trim(), // passwordConfirmation 추가
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        if (errorData.message === "Email already in use") {
          setModalMessage("사용 중인 이메일입니다.");
        } else {
          setModalMessage(errorData.message || "회원가입에 실패했습니다.");
        }
        return;
      }

      setSuccessMessage("가입이 완료되었습니다!");
      setTimeout(() => {
        router.push("/items"); // 성공 후 중고마켓 페이지로 이동
      }, 2000); // 2초 후 이동
    } catch (error) {
      setModalMessage("서버 오류가 발생했습니다.");
    }
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (password !== confirmPassword) {
      setPasswordMatchError("비밀번호가 일치하지 않아요.");
      return;
    }

    setPasswordMatchError("");
    handleSignup();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <img src="/panda_logo.png" alt="판다마켓 로고" />
          <h1>판다마켓</h1>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p>이메일</p>
          <input
            type="email"
            className={styles.input}
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>닉네임</p>
          <input
            type="text"
            className={styles.input}
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <p>비밀번호</p>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword ? "/ic_eye_closed.png" : "/ic_eye_closed.png"}
              alt="비밀번호 보이기/숨기기"
              className={styles.eyeIcon}
              onClick={togglePasswordVisibility}
            />
          </div>

          <p>비밀번호 확인</p>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              placeholder="비밀번호를 다시 입력해주세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img
              src={showPassword ? "/ic_eye_closed.png" : "/ic_eye_closed.png"}
              alt="비밀번호 보이기/숨기기"
              className={styles.eyeIcon}
              onClick={togglePasswordVisibility}
            />
          </div>
          {passwordMatchError && (
            <p className={styles.error}>{passwordMatchError}</p>
          )}

          <button
            className={styles.button}
            type="submit"
            disabled={!email || !nickname || !password || !confirmPassword}
          >
            회원가입
          </button>
        </form>

        <div className={styles.socialLogin}>
          <p>간편 로그인하기</p>
          <div className={styles.googlekakao}>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/ic_google.png"
                alt="Google 로그인"
                className={styles.icons}
              />
            </a>
            <a
              href="https://www.kakaocorp.com/page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/ic_kakao.png"
                alt="Kakao 로그인"
                className={styles.icons}
              />
            </a>
          </div>
        </div>

        <p className={styles.text}>
          이미 회원이신가요? <a href="/login">로그인</a>
        </p>

        {/* 성공 메시지 모달 */}
        {successMessage && (
          <div className={styles.modal}>
            <p>{successMessage}</p>
          </div>
        )}

        {/* 실패 모달 */}
        {modalMessage && (
          <div className={styles.modal}>
            <p>{modalMessage}</p>
            <button
              className={styles.modalButton}
              onClick={() => setModalMessage("")}
            >
              닫기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
