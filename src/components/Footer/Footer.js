import React from 'react';
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
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
        <div className={styles.sns}>
          <span><img src={facebook} alt="facebook" /></span>
          <span><img src={twitter} alt="twitter" /></span>
          <span><img src={youtube} alt="youtube" /></span>
          <span><img src={instagram} alt="instagram" /></span>
        </div>
      </div>
    </div >
  );
}

export default Footer;