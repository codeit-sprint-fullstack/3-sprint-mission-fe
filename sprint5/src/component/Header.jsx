import logoImg from "../assets/pandaLogo.png";
import { Fragment } from "react";
import "./Header.css";
function Nav() {
  return (
    <header ClassName="Header">
      <div className="NavContainer">
        <div className="NavLeft">
          <img className="logo" src={logoImg} alt="판다마켓 로고" width="153" />
          <div ClassName="navContent">
            <ul>
              <li>자유게시판</li>
              <li>중고마켓</li>
            </ul>
          </div>
        </div>
        <div className="btn_layout">
          <a href="#" target="_blank" class="login">
            로그인
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
