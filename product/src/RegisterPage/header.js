import React from "react";
import './header.css';
import pandaLogo from '../image/panda-market-logo.png';

function HeaderPart() {
    return (
        <header className="headerPart">
        <div className ="logoPart">
          <img className='img' src={pandaLogo} alt="로고이미지"/>
          <p className='text'>자유게시판</p>
          <a href='/items' className='text'>중고마켓</a>
        </div>
        <div>
          <button className='login'>로그인</button>
        </div>
      </header>
    )
}

export default HeaderPart;