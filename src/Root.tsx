import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Pretendard from "../public/fonts/PretendardVariable.woff2";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import useScreenWidth from "./hooks/useScreenWidth";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
        font-family: "Pretendard Variable";
        src: url(${Pretendard}) format('woff2'); 
    }

  * {
    box-sizing:border-box;
    border:none;
  }

  body {
    font-family:"Pretendard Variable";
    font-size:1.6rem;
  }

  html {
    font-size:62.5%;
  }

  a {
    text-decoration:none;
    color:inherit;
  }

  input {
    background-color:${(props) => props.theme.color.inputBg};
  }
  button {
    color: ${(props) => props.theme.color.mainIvory};
  background-color: ${(props) => props.theme.color.mainBlue};
  &:disabled {
    background-color: ${(props) => props.theme.color.mainGrey};
  }
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  }

  button:disabled {
    background-color: ${(props) => props.theme.color.mainGrey};
  }
`;

function Root() {
  const screenWidth = useScreenWidth();

  return (
    <>
      <GlobalStyle />
      <Nav screenWidth={screenWidth} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
