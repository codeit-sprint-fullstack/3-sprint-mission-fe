import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const pathname = router;
  const isItemPage = pathname === "/items";
  const isFreePage = pathname === "/free";

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

        {/* 글씨 만이 아닌 여백을 클릭해도 링크 이동하기 위함 */}
        <Link href="/login" className={styles.topNavLoginBt}>
          로그인
        </Link>
      </div>
    </section>
  );
}

export default Header;
