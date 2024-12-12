import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.copy}>©codeit - 2024</div>
        <div className={styles.info}>
          <Link href="/privacy">
            <span>Privacy Policy</span>
          </Link>
          <Link href="/faq">
            <span>FAQ</span>
          </Link>
        </div>
        <div className={styles.sns}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ic_facebook.svg" alt="facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ic_twitter.svg" alt="twitter" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ic_youtube.svg" alt="youtube" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ic_instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
