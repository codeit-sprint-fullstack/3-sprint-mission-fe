import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { Provider } from "jotai";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <Provider>
        <ThemeProvider theme={defaultTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
