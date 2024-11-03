import Sprint5 from "./features/sprint5/Sprint5";
import RendingPage from "./features/rendingPage/components/RendingPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./features/item/Items";
import Registration from "./features/registration/component/Registration";
import ProductDetails from "./features/productDetails/components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RendingPage />} />
        <Route path="/sprint5" element={<Sprint5 />} />
        <Route path="/items" element={<Item />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
