import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'
import facebook from '../../assets/images/ic_facebook.svg'
import twitter from '../../assets/images/ic_twitter.svg'
import youtube from '../../assets/images/ic_youtube.svg'
import instagram from '../../assets/images/ic_instagram.svg'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.copy}>©codeit - 2024</div>
        <div className={styles.info}>
          <Link to="/privacy"><span>Privacy Policy</span></Link>
          <Link to="/faq"><span>FAQ</span></Link>
        </div>
        <div className={styles.sns}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div >
  );
}

export default Footer;