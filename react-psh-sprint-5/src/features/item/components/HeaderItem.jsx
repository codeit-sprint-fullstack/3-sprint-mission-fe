import PandaLogo from "../images/PandaLogo.png"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function HeaderItem() {
    const location = useLocation();
    const itemLinkStyle = {
        color: location.pathname === "/items" ? "#3692FF" : "black",
    };

    return (
        <div className="header-contain">
            <div className="header1">
                <div className="header-1">
                    <Link to="/" ><img src={PandaLogo} alt="Panda Market Logo" /></Link>
                    {location.pathname !== "/" && (
                        <div className="header-text">
                            <p> <a href="#" className='header-text-1'>자유게시판</a></p>
                            <p><Link to="/items" className="header-text-2" style={ itemLinkStyle }>중고마켓</Link></p>
                        </div>
                    )}
                    <a href='#' className="button button-def">로그인</a>
                </div>
            </div>
        </div >
    );
}

export default HeaderItem;