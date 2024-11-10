import React from "react";
import './header.css';
import pandaLogo from '../image/panda-market-logo.png';

function HeaderPart() {
    return (
        <header className="header">
             <img src={pandaLogo} alt="로고이미지" width="153"/>
            <button className="login">로그인</button>
        </header>
    )
}

export default HeaderPart;