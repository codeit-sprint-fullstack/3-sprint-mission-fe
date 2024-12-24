import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; codeit - 2024</p>
        <div className={styles.links}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/ic_facebook.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/ic_twitter.png" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src="/ic_youtube.png" alt="YouTube" width={24} height={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/ic_instagram.png" alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
