import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";

function Nav() {
  const router = useRouter();

  const isLoggedIn = true; // true 또는 false로 각각 바꿔보며 확인

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.gnb}>
          <Link href="/">
            <div className={styles.logo}>
              <img src="/logo.png" alt="로고" className={styles.logoImg} />
              <div className={styles.logoTitle}>판다마켓</div>
            </div>
          </Link>
          <ul className={styles.ul}>
            <Link href="/community">
              <li
                className={`${styles.li} ${
                  router.pathname === "/community" ? styles.active : ""
                }`}
              >
                자유게시판
              </li>
            </Link>
            <Link href="/market">
              <li
                className={`${styles.li} ${
                  router.pathname === "/market" ? styles.active : ""
                }`}
              >
                중고마켓
              </li>
            </Link>
          </ul>
          {isLoggedIn ? (
            <div className={styles.avatar}>
              <img src="/user_profile.png" alt="유저 프로필" />
            </div>
          ) : (
            <Link href="/login">
              <div className={styles.login}>로그인</div>
            </Link>
          )}
        </div>
      </div>
      <div style={{ height: "70px" }}></div>
      {/* nav 뒤 채우기 */}
    </>
  );
}

export default Nav;
