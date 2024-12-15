import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footerBanner}>
      <div className={styles.footerBannerContent}>
        <div style={{ color: "#9CA3AF" }}> ©codeit - 2024</div>
        <div className={styles.footerBannerMiddleContent}>
          <Link href="privacy.html" className={styles.footerA}>
            Frame 2609405
          </Link>
          <Link href="faq.html" className={styles.footerA}>
            FAQ
          </Link>
        </div>
        <div className={styles.footerBannerImgs}>
          <Link href="https://www.facebook.com/?locale=ko_KR" target="_blank">
            <div className={styles.linkImgBox}>
              <Image
                fill
                src="/imgs/facebook-logo.svg"
                alt="pandaMarketLogo"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
          <Link href="https://x.com/?lang=ko" target="_blank">
            <div className={styles.linkImgBox}>
              <Image
                fill
                src="/imgs/twitter-logo.svg"
                alt="twitter"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
          <Link href="https://www.youtube.com/" target="_blank">
            <div className={styles.linkImgBox}>
              <Image
                fill
                src="/imgs/youtube-logo.svg"
                alt="youtube"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <div className={styles.linkImgBox}>
              <Image
                fill
                src="/imgs/instagram-logo.svg"
                alt="instagram"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
