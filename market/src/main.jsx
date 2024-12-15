import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./pages/market";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./pages/home";
import UsedMarket from "./pages/items";
import Registration from "./pages/registration";
import Board from "./pages/board";
import WriteBoard from "./pages/writeBoard";
import BoardItem from "./pages/boardItem";
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
          {/* <Route path="/marekt" element={<Market />} /> */}
          <Route path="/items" element={<UsedMarket />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/:num" element={<BoardItem />} />
          <Route path="/board/writeBoard" element={<WriteBoard />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
