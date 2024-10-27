import '../css/Header.css';
import PandaLogo from '../image/PandaLogo.png';

function Header() {
    return (
        <div className="header-contain">
            <header>
                <div className="header-1">
                    <a href="#"><img src={PandaLogo} alt="Panda Market Logo" /></a>
                    <div className="header-text">
                        <p> <a href="#" className='header-text-1'>자유게시판</a></p>
                        <p> <a href="#" className='header-text-2'>중고마켓</a></p>
                    </div>
                    <a href='#' className="button button-def">로그인</a>
                </div>
            </header>
        </div>
    );
}

export default Header;