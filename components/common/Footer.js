import styles from "@/styles/Footer.module.scss";
import facebook from "@/public/facebook.png";
import instagram from "@/public/instagram.png";
import twitter from "@/public/twitter.png";
import youtube from "@/public/youtube.png";

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.contentFooter}>
          <div className={styles.footerLeft}>
            <ul>@codeit - 2024</ul>
          </div>
          <div className={styles.footerCenter}>
            <ul className={styles.Privacy_Policy}>Privacy Policy</ul>
            <ul className={styles.FAQ}>FAQ</ul>
          </div>
          <div className={styles.footerRight}>
            <a href="https://www.facebook.com" target="_blank" title="Facebook">
              <img
                className={styles.footerImg}
                src={"/facebook.png"}
                alt="Facebook"
              />
            </a>
            <a href="https://twitter.com" target="_blank" title="Twitter">
              <img
                className={styles.footerImg}
                src={"./twitter.png"}
                alt="Twitter"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank" title="YouTube">
              <img
                className={styles.footerImg}
                src={"./youtube.png"}
                alt="YouTube"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              title="Instagram"
            >
              <img
                className={styles.footerImg}
                src={"./instagram.png"}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
