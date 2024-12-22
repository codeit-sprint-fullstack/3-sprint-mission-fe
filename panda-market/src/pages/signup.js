import styles from "../styles/Signup.module.css";

export default function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/logo.png" alt="판다마켓 로고" className={styles.logo} />
        <h1>판다마켓</h1>
        <form>
          <input type="email" placeholder="이메일을 입력해주세요" />
          <input type="text" placeholder="닉네임을 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
          <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
          <button type="submit">회원가입</button>
        </form>
        <p>
          이미 회원이신가요? <a href="/login">로그인</a>
        </p>
      </div>
    </div>
  );
}
