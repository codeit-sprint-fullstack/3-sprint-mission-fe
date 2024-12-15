import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/layouts/Header.module.css";

function Header() {
  const router = useRouter();

  const getLinkStyle = (path) => (
    {
      color: router.pathname === path ? "var(--mainColor)" : "#4B5563",
      fontWeight: router.pathname === path ? 800 : 700, fontSize: router.pathname === path ? 18 : 18,
    });

  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/">
            <div
              className={styles.pandaLogoImg}
              style={{
                position: "relative",
              }}
            >
              <Image
                src="/images/logo/panda-market-logo.png"
                fill
                alt="판다마켓 로고"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.pandaLogoText}>
              <Image
                src="/images/logo/panda-text-log.png"
                width={113}
                height={41}
                alt="판다마켓 로고(글씨)"
              />
            </div>
          </Link>

          <div className={styles.headerTextBox}>
            <div className={styles.headerText}>
              <Link href="/community-feed" style={getLinkStyle("/community-feed")}>
                자유게시판
              </Link>
            </div>
            <div className={styles.headerText}>
              <Link href="/Items" style={getLinkStyle("/Items")}>
                중고마켓
              </Link>
            </div>
          </div>

          <button className={styles.loginButtn}>
            <Link href="/Login">로그인</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
