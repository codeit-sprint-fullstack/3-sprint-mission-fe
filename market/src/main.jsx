import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./pages/market";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./pages/home";
import UsedMarket from "./pages/usedMarket";
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
          <Route path="/usedmarket" element={<UsedMarket />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
