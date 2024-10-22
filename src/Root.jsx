import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Pretendard from "../public/fonts/PretendardVariable.woff2";
import Products from "./pages/Products";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
    border:none;
  }

  html {
    font-size:62.5%;
  }

  body {
    font-family:${Pretendard};
    font-size:16rem;
  }

  a {
    text-decoration:none;
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
