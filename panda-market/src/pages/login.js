import { useState } from "react";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // 비밀번호 보이기/숨기기 토글 함수
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <img src="/panda_logo.png" alt="판다마켓 로고" />
          <h1>판다마켓</h1>
        </div>
        <form className={styles.form}>
          <p>이메일</p>
          <input
            type="email"
            className={styles.input}
            placeholder="이메일을 입력해주세요"
          />
          <p>비밀번호</p>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              placeholder="비밀번호를 입력해주세요"
            />
            <img
              src={showPassword ? "/ic_eye_closed.png" : "/ic_eye_closed.png"}
              alt="비밀번호 보이기/숨기기"
              className={styles.eyeIcon}
              onClick={togglePasswordVisibility}
            />
          </div>
          <button className={styles.button} type="submit">
            로그인
          </button>
        </form>
        <div className={styles.socialLogin}>
          <p>간편 로그인하기</p>
          <div className={styles.icons}>
            <img src="/ic_google.png" alt="Google 로그인" />
            <img src="/ic_kakao.png" alt="Kakao 로그인" />
          </div>
        </div>
        <p className={styles.text}>
          판다마켓이 처음이신가요? <a href="/signup">회원가입</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
