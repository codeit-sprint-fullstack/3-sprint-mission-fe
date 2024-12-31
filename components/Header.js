import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthProvider";

function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  const isItemPage = pathname === "/items";
  const isFreePage = pathname === "/free";

  const { user, logout } = useAuth();

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

        {user ? (
          <div onClick={logout}>{user?.nickname}</div>
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
