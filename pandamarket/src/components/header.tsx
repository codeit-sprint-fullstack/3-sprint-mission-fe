'use client';

import { usePathname } from 'next/navigation';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { JSX, useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  name: string;
}

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // 유저 정보 API 호출
    axios
      .get<User>('https://panda-market-api.vercel.app/users/me', {
        withCredentials: true,
      })
      .then((response) => setUser(response.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        {/* 로고 */}
        <div>
          <Link href="/">
            <Image
              width={153}
              height={53}
              src="/images/logo.png"
              alt="로고이미지"
            />
          </Link>
        </div>

        {/* 네비게이션 링크 */}
        <Link
          href="/board"
          className={`${styles.boardText} ${pathname === '/board' ? styles.active : ''}`}
        >
          자유게시판
        </Link>
        <Link
          href="/product"
          className={`${styles.marketText} ${pathname === '/product' ? styles.active : ''}`}
        >
          중고마켓
        </Link>
      </div>

      {/* 로그인/프로필 영역 */}
      {user ? (
        <div className={styles.profileArea}>
          <span>{user.name}님</span>
          <button className={styles.profileBtn} onClick={() => alert('프로필 페이지로 이동')}>
            프로필
          </button>
        </div>
      ) : (
        <Link href="/login">
          <button className={styles.loginBtn}>로그인</button>
        </Link>
      )}
    </div>
  );
}
