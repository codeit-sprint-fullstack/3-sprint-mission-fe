import React from 'react';
import styles from './Nav.module.css'
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/user_profile.png'

function Nav() {
  const isLoggedIn = false; // true 또는 false로 각각 바꿔보며 확인

  return (
    <div className={styles.nav}>
      <div className={styles.gnb}>
        <div className={styles.logo}>
          <img src={logo} alt="로고" className={styles.logoImg} />
          <div className={styles.logoTitle}>판다마켓</div>
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>자유게시판</li>
          <li className={styles.li}>중고마켓</li>
        </ul>
        {isLoggedIn ? (
          <div className={styles.avatar}>
            <img src={avatar} alt="유저 프로필" />
          </div>
        ) : (
          <div className={styles.login}>로그인</div>
        )}
      </div>
    </div>
  );
}

export default Nav;