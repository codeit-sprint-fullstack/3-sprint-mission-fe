import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import Root from "./Root";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={defaultTheme}>
          <Root />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
