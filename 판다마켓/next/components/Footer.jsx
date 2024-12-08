import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer_inner">
          <span>©codeit - 2024</span>
          <div className="ft_cen">
            <span>
              <a href="./sub/privacy.html">Privacy Policy</a>
            </span>
            <span>
              <a href="./sub/FAQ.html">FAQ</a>
            </span>
          </div>
          <ul className="sns">
            <li>
              <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
                <img src="../img/facebook-logo.svg" alt="페북로고" />
              </a>
            </li>
            <li>
              <a href="https://x.com/?lang=ko" target="_blank">
                <img src="../img/twitter-logo.svg" alt="트위터로고" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <img src="../img/youtube-logo.svg" alt="유튭로고" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img src="../img/instagram-logo.svg" alt="인스타로고" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
