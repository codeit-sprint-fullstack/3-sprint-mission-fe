import faceBookImg from '../../img/social/ic_facebook.png';
import twitterImg from '../../img/social/ic_twitter.png';
import youtubeImg from '../../img/social/ic_youtube.png';
import instagramImg from '../../img/social/ic_instargram.png';
import './index.css';

function Footer() {
  return (
    <footer>
      <div id="footerContent">
        <div id="copyright">© Codeit 2024</div>

        <div id="info">
          <div><a href="/privacy">Privacy Policy</a></div>
          <div id='faq'><a href="/faq">FAQ</a></div>
        </div>

        <div id="socialIcons">
          <a href="https://www.facebook.com/?locale=ko_KR"><img src={faceBookImg} alt="Facebook" /></a>
          <a href="https://x.com/?lang=ko"><img src={twitterImg} alt="Twitter" /></a>
          <a href="https://www.youtube.com/"><img src={youtubeImg} alt="YouTube" /></a>
          <a href="https://www.instagram.com/sem/campaign/emailsignup"><img src={instagramImg} alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;