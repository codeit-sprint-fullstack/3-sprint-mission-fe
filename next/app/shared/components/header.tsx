'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import noHeader from './noHader';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';

export default function Header({}) {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  useEffect(() => {
  }, [user]);
  if (!noHeader.some((x) => x === pathname))
    return (
      <header>
        <div className="gnb">
          <Link className="logo" href="/">
            <img src="/img/logo.png" alt="로고" />
          </Link>
          <nav>
            <ul>
              <NavLi href="/board">자유게시판</NavLi>
              <NavLi href="/items">중고마켓</NavLi>
            </ul>
          </nav>
          <Link
            href="/user/login"
            className="loginBtn"
            onClick={!!user ? logout : undefined}
          >
            {!!user ? '로그아웃' : '로그인'}
          </Link>
        </div>
      </header>
    );
}

type NavLi = {
  href: string;
  children: React.ReactNode;
};
function NavLi({ href, children }: NavLi) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}
