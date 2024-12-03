import Link from "next/link";
import styles from "@/styles/ui/Nav.module.css";

const getLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? "#FFFFFF" : "#747474",
    
  };
};

function Nav() {
  return (
    <header>
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <Link href="/index">
          <img className={styles.pandaLogoImg} src={pandaLogoImg} alt='pandaMarketLogo' />
          <img className={styles.pandaLogoText} src={pandaLogoTextImg} alt='pandaMarketLogo' />
        </Link>

        <div className={styles.navTextBox}>
          <div className={styles.navText}>
            <Link href="/CommunityFeed" style={getLinkStyle}>
              자유게시판
            </Link>
          </div>
          <div className={styles.navText}>
            <Link href="/Items" style={getLinkStyle}>
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

export default Nav;
