import styles from "@/styles/Header.module.scss";
import image from "@/public/pandaLogo.png";

export default function Header() {
  return (
    <header ClassName={styles.Header}>
      <div className={styles.NavContainer}>
        <div className={styles.NavLeft}>
          <img
            className={styles.logo}
            src={"/pandaLogo.png"}
            alt="판다마켓 로고"
            width="153"
          />
          <div ClassName={styles.navContent}>
            <ul>
              <li>자유게시판</li>
              <li>중고마켓</li>
            </ul>
          </div>
        </div>
        <div className={styles.btn_layout}>
          <a href="#" target="_blank" className={styles.login}>
            로그인
          </a>
        </div>
      </div>
    </header>
  );
}
