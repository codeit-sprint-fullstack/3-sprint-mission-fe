import styled from "styled-components";
import PropTypes from "prop-types";
import logo from "../../../public/images/common/logo.png";
import mobileLogo from "../../../public/images/common/mobileLogo.png";
import { MEDIA_QUERY } from "../../constants/mediaQuery";

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
  ${(props) => props.theme.media.medium} {
    max-width: 100%;
    margin: 0 2.4rem;
  }
  ${(props) => props.theme.media.small} {
    margin: 0 1.6rem;
  }
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
  ${(props) => props.theme.media.small} {
    gap: 0.8rem;
    img {
      width: 10.3rem;
    }
  }
`;

const LoginButton = styled.button`
  width: 8.8rem;
  height: 4.2rem;
`;

function Nav({ screenWidth, children }) {
  return (
    <NavComponent>
      <NavContainer>
        <LogoContainer>
          {screenWidth === MEDIA_QUERY.value.small ? <img src={mobileLogo} /> : <img src={logo} />}
          {children}
        </LogoContainer>
        <LoginButton>로그인</LoginButton>
      </NavContainer>
    </NavComponent>
  );
}

export default Nav;

Nav.propTypes = {
  screenWidth: PropTypes.string,
  children: PropTypes.node,
};
