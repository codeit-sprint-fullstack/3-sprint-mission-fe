import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import Root from "./Root";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Root />
      </ThemeProvider>
    </>
  );
}

export default App;
