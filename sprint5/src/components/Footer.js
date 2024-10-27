import "../styleCom/footer.css";
import facebookImg from "../imgs/facebook-logo.svg";
import youtubeImg from "../imgs/youtube-logo.svg";
import twitterImg from "../imgs/twitter-logo.svg";
import instarImg from "../imgs/instagram-logo.svg";

export function Footer() {
  return (
    <section class="footerBanner">
      <div class="footerBannerContent">
        <div style={{ color: "#9CA3AF" }}> ©codeit - 2024</div>
        <div class="footerBannerMiddleContent">
          <a href="privacy.html">Frame 2609405</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div class="footerBannerImgs">
          <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
            <img src={facebookImg} />
          </a>
          <a href="https://x.com/?lang=ko" target="_blank">
            <img src={twitterImg} />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtubeImg} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instarImg} />
          </a>
        </div>
      </div>
    </section>
  );
}
