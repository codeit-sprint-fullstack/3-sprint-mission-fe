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

  html {
    font-size:62.5%;
  }

  body {
    font-family:"Pretendard Variable";
    font-size:1.6rem;
  }

  a {
    text-decoration:none;
    color:inherit;
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
