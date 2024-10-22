import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Pretendard from "../assets/fonts/PretendardVariable.woff2";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
  }

  html {
    font-size:62.5%;
  }  

  body {
    font-family:${Pretendard};
    font-size:16rem;
  }
`;

function Root() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default Root;
