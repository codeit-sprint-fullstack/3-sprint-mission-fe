import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/user_profile.png'

function Nav() {
  const isLoggedIn = false; // true 또는 false로 각각 바꿔보며 확인

  return (
    <div className={styles.nav}>
      <div className={styles.gnb}>
        <Link to="/"><div className={styles.logo}>
          <img src={logo} alt="로고" className={styles.logoImg} />
          <div className={styles.logoTitle}>판다마켓</div>
        </div></Link>
        <ul className={styles.ul}>
          <Link to="/community"><li className={styles.li}>자유게시판</li></Link>
          <Link to="/items"><li className={styles.li}>중고마켓</li></Link>
        </ul>
        {isLoggedIn ? (
          <div className={styles.avatar}>
            <img src={avatar} alt="유저 프로필" />
          </div>
        ) : (
          <Link to="/login"><div className={styles.login}>로그인</div></Link>
        )}
      </div>
    </div>
  );
}

export default Nav;