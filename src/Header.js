// src/components/Header.js
import React from 'react';
import './Header.css';  // 스타일링 파일

function Header() {
  return (
    <header className="header">
      <div className="left">
        <div className="logo">
          <img src="/panda_favicon.png" alt="판다마켓 로고" />
          <h1 className="panda_text">판다마켓</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#freeboard">자유게시판</a></li>
            <li><a href="#notice">공지마켓</a></li>
          </ul>
        </nav>
      </div>
      <div className="login-button">
        <button>로그인</button>
      </div>
    </header>
  );
}

export default Header;
