import styled from "styled-components";
import LoginButton from "./LoginButton";

const NavComponent = styled.nav`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  position: sticky;
  border-bottom: solid 0.1rem ${(props) => props.theme.color.subGrey};
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 152rem;
  margin: 0 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
  img {
    width: 15.1rem;
    height: auto;
  }
`;

const NavLink = styled.a`
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.color.mainCharcoal};
  font-weight: 700;
`;

function Nav() {
  return (
    <NavComponent>
      <NavContainer>
        <LogoContainer>
          <img src="../public/images/common/logo.png" />
          <NavLink href="/">자유게시판</NavLink>
          <NavLink href="/">중고마켓</NavLink>
        </LogoContainer>
        <LoginButton>로그인</LoginButton>
      </NavContainer>
    </NavComponent>
  );
}

export default Nav;
