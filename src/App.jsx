import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import Root from "./Root";
import { Provider } from "jotai";

function App() {
  return (
    <>
      <Provider>
        <ThemeProvider theme={defaultTheme}>
          <Root />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
