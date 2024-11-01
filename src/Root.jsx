import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Products from "./pages/Products";
import Pretendard from "../public/fonts/PretendardVariable.woff2";

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
  return (
    <>
      <GlobalStyle />
      <Products />
    </>
  );
}

export default Root;
