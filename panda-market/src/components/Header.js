import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/panda_logo.png" alt="판다마켓 로고" width={40} height={40} />
          </Link>
          <span className={styles.logoText}>판다마켓</span>
        </div>
        <nav className={styles.nav}>
          <Link href="/board" className={styles.navLink}>
            자유게시판
          </Link>
          <Link href="/market" className={styles.navLink}>
            중고마켓
          </Link>
        </nav>
        <Link href="/login" className={styles.loginButton}>
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
