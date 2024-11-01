import { createBrowserRouter } from "react-router-dom";
// import Products from "./pages/Products";
import Root from "./Root";
import Home from "./pages/Home";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/items",
        element: <Products />,
      },
    ],
  },
]);

export default router;
