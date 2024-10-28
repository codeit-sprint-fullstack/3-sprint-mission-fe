import React from 'react';
import styles from './Nav.module.css'
import logo from '../../assets/images/logo.png'

function Nav() {
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="로고" className={styles.logoImg} />
            <div className={styles.logoTitle}>판다마켓</div>
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>자유게시판</li>
          <li className={styles.li}>중고마켓</li>
        </ul>
          <div className={styles.login}>로그인</div>
    </div>
  );
}

export default Nav;