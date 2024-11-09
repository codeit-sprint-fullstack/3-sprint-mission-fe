import { Link, NavLink, useLocation } from 'react-router-dom';
import PANDA_MARKET_LOGO_IMAGE from '../../assets/images/logo/panda-market-logo.svg';
import styled from 'styled-components';

// layouts에 넣어야할지 shared 폴더에 넣어야할지 고민이 되는 컴포넌트

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header>
      <Nav aria-label="메인 내비게이션">
        <NavContainer>
          <MenuContainer>
            <Link to="/">
              <img src={PANDA_MARKET_LOGO_IMAGE} alt="판다마켓 로고 아이콘" />
            </Link>
            {currentPath !== '/' && (
              <>
                <NavLink to="/">자유게시판 </NavLink>
                <NavLink to="/items" style={getLinkStyle}>
                  중고마켓
                </NavLink>
              </>
            )}
          </MenuContainer>
          <LoginButton aria-label="로그인 버튼">로그인</LoginButton>
        </NavContainer>
      </Nav>
    </header>
  );
};

export default Navbar;

type LinkStyleProps = {
  isActive: boolean;
};

const getLinkStyle = ({ isActive }: LinkStyleProps) => {
  return {
    color: isActive
      ? 'var(--primary-blue-color)'
      : 'var(--nav-menu-gray-font-color)',
  };
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background: white;
  z-index: 1;
  max-height: 70px;
  border-bottom: 1px solid var(--navbar-border-color);
  padding: 1rem 2.4rem;
  @media (max-width: 743px) {
    padding: 1rem 1.6rem;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 170rem;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: bold;

  a {
    color: var(--nav-menu-gray-font-color);
    font-size: 1.6rem;
  }
`;

const LoginButton = styled.button`
  min-width: 12.8rem;
  height: 4.8rem;
  border: none;
  border-radius: 0.8rem;
  background-color: var(--primary-blue-color);
  color: white;
  padding: 1.2rem 2.3rem;
  font-weight: 600;
  font-size: 1.6rem;
  white-space: nowrap;
  cursor: pointer;
`;
