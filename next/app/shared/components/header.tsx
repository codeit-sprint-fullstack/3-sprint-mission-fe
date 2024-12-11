import { ReactNode } from "react";
import Link from "next/link";

export default function Header({}) {
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
        <a href="./login.html" className="loginBtn">
          로그인
        </a>
      </div>
    </header>
  );
}

type NavLi = {
    href:string,
    children:React.ReactNode
}
function NavLi({ href, children }:NavLi) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}
