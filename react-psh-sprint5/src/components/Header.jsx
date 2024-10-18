import '../css/main.css';

import PandaLogo from '../image/PandaLogo.png';

function Header() {
    return (
        <div className="header-contain">
            <header>
                <div className="header-1">
                    <img src={PandaLogo} alt="Panda Market Logo" />
                    <div className="header-text">
                        <p className='header-text-1'>자유게시판</p>
                        <p className='header-text-2'>중고마켓</p>
                    </div>
                    <a href='#' className="button button-def">로그인</a>
                </div>
            </header>
        </div>
    );
}

export default Header;