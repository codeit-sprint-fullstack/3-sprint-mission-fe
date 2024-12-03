import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ui/Header.module.css";

const getLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? "#FFFFFF" : "#747474",
  };
};

function Header() {
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
              <Link href="/CommunityFeed" style={{ getLinkStyle }}>
                자유게시판
              </Link>
            </div>
            <div className={styles.headerText}>
              <Link href="/Items" style={{ getLinkStyle }}>
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
