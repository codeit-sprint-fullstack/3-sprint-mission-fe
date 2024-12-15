import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/layouts/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>© Codeit 2024</div>

        <div className={styles.info}>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className={styles.faq}>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>

        <div className={styles.socialIcons}>
          <Link href="https://www.facebook.com/?locale=ko_KR">
            <Image
              src="/images/social/ic_facebook.png"
              width={20}
              height={20}
              alt="Facebook"
            />
          </Link>
          <Link href="https://x.com/?lang=ko">
            <Image
              src="/images/social/ic_twitter.png"
              width={20}
              height={20}
              alt="Twitter"
            />
          </Link>
          <Link href="https://www.youtube.com/">
            <Image
              src="/images/social/ic_youtube.png"
              width={20}
              height={20}
              alt="YouTube"
            />
          </Link>
          <Link href="https://www.instagram.com/sem/campaign/emailsignup">
            <Image
              src="/images/social/ic_instargram.png"
              width={20}
              height={20}
              alt="Instagram"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
