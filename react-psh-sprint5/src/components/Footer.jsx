import '../css/Footer.css'
import facebook from '../icon/facebook-logo.svg';
import twitter from '../icon/twitter-logo.svg';
import instagram from '../icon/instagram-logo.svg';
import youtube from '../icon/youtube-logo.svg';

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-box">
                    <div className="footer-box-inner1">
                        ©codeit - 2024
                    </div>

                    <div className="footer-box-inner2">
                        <div>
                            <a className="footer-box-inner2-1" href="./dir/privacy.html">Privacy Policy</a>
                        </div>
                        <div>
                            <a className="footer-box-inner2-2" href="./dir/faq.html">FAQ</a>
                        </div>
                    </div>

                    <div className="footer-box-inner3">
                        <a href="https://www.facebook.com" target="_blank" title="Facebook">
                            <img className="icon" src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" title="Twitter">
                            <img className="icon" src={twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" title="YouTube">
                            <img className="icon" src={youtube} alt="YouTube" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" title="Instagram">
                            <img className="icon" src={instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;