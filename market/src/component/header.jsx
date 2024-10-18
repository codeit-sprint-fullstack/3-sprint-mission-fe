import { useEffect } from "react";

export default function Header({}) {
  useEffect(() => {}, []);
  return (
    <header>
      <div className="gnb">
        <a className="logo" href="/">
          <img src="./img/logo.png" alt="로고" />
        </a>
        <nav>
          <ul>
            <NavLi href="#">자유게시판</NavLi>
            <NavLi href="#">중고마켓</NavLi>
          </ul>
        </nav>
        <a href="./login.html" className="loginBtn">
          로그인
        </a>
      </div>
    </header>
  );
}

function NavLi({ href, children }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}
