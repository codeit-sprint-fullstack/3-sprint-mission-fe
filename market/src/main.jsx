import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./pages/market";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./pages/home";
import UsedMarket from "./pages/items";
import Registration from "./pages/registration";
export default function Main() {
  let init = {
    paddingTop: "70px",
  };
  return (
    <BrowserRouter>
      <div style={init} className="root">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marekt" element={<Market />} />
          <Route path="/items" element={<UsedMarket />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
