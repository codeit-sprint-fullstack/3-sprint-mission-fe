import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductRegistrationComponent from "./pages/ProductRegistration";
import Product from "./pages/Product";

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
      {
        path: "/registration",
        element: <ProductRegistrationComponent />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

export default router;
