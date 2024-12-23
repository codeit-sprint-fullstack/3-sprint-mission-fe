import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  const isItemPage = pathname === "/items";
  const isFreePage = pathname === "/free";

  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // 클라이언트에서만 localStorage를 확인
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  const handleLogout = () => {
    if (accessToken) {
      localStorage.removeItem("accessToken");
      setAccessToken(null);
    }
  };

  return (
    <section className={styles.topNav}>
      <div className={styles.navCon}>
        <div className={styles.leftCon}>
          {/* 판다로고 이미지 */}
          <Link href="/">
            <div className={styles.logoImgDiv}>
              <Image
                fill
                src="/imgs/panda-market-logo.png"
                alt="pandaMarketLogo"
              />
            </div>
          </Link>
          {/* 자유게시판 & 중고마켓 */}
          <Link
            href="/free"
            className={`${styles.navLinkBt} ${isFreePage ? styles.active : ""}`}
          >
            자유게시판
          </Link>
          <Link
            href="/items"
            className={`${styles.navLinkBt} ${isItemPage ? styles.active : ""}`}
          >
            중고마켓
          </Link>
        </div>

        {accessToken ? (
          <div onClick={handleLogout}>테스트</div>
        ) : (
          <Link href="/login" className={styles.topNavLoginBt}>
            로그인
          </Link>
        )}
      </div>
    </section>
  );
}

export default Header;
