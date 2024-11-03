import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.css'

function Nav() {
  const location = useLocation();

  const isLoggedIn = false; // true 또는 false로 각각 바꿔보며 확인

  return (
    <div className={styles.nav}>
      <div className={styles.gnb}>
        <Link to="/"><div className={styles.logo}>
          <img src='/static/images/logo.png' alt="로고" className={styles.logoImg} />
          <div className={styles.logoTitle}>판다마켓</div>
        </div></Link>
        <ul className={styles.ul}>
          <Link to="/community"><li className={`${styles.li} ${location.pathname === '/community' ? styles.active : ''}`}>자유게시판</li></Link>
          <Link to="/items"><li className={`${styles.li} ${location.pathname === '/items' ? styles.active : ''}`}>중고마켓</li></Link>
        </ul>
        {isLoggedIn ? (
          <div className={styles.avatar}>
            <img src='/static/images/user_profile.png' alt="유저 프로필" />
          </div>
        ) : (
          <Link to="/login"><div className={styles.login}>로그인</div></Link>
        )}
      </div>
    </div>
  );
}

export default Nav;