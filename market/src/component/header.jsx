import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header({}) {
  useEffect(() => {}, []);
  return (
    <header>
      <div className="gnb">
        <Link className="logo" to="/">
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

function NavLi({ href, children }) {
  return (
    <li>
      <Link to={href}>{children}</Link>
    </li>
  );
}
