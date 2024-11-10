import React from "react";
import './header.css';
import pandaLogo from '../image/panda-market-logo.png';

function HeaderPart() {
    return (
        <header className="headerSection">
        <div className ="logoSection">
          <img className='imgSize' src={pandaLogo} alt="로고이미지"/>
          <p className='textSection'>자유게시판</p>
          <a href='/items' className='changeText'>중고마켓</a>
        </div>
        <div>
          <button className='loginBtn'>로그인</button>
        </div>
      </header>
    )
}

export default HeaderPart;