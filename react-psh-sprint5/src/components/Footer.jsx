import '../css/Footer.css'
import facebook from '../icon/facebook-logo.svg';
import twitter from '../icon/twitter-logo.svg';
import instagram from '../icon/instagram-logo.svg';
import youtube from '../icon/youtube-logo.svg';



function Footer() {
    return (
        <div>
            <footer>
                <box class="footer-box">
                    <div class="footer-box-inner1">
                        ©codeit - 2024
                    </div>

                    <div class="footer-box-inner2">
                        <div>
                            <a class="footer-box-inner2-1" href="./dir/privacy.html">Privacy Policy</a>
                        </div>
                        <div>
                            <a class="footer-box-inner2-2" href="./dir/faq.html">FAQ</a>
                        </div>
                    </div>

                    <div class="footer-box-inner3">
                        <a href="https://www.facebook.com" target="_blank" title="Facebook">
                            <img class="icon" src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" title="Twitter">
                            <img class="icon" src={twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" title="YouTube">
                            <img class="icon" src={youtube} alt="YouTube" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" title="Instagram">
                            <img class="icon" src={instagram} alt="Instagram" />
                        </a>
                    </div>
                </box>
            </footer>
        </div>
    );
}

export default Footer;