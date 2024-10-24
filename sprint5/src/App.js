import { TopNav } from "./components/TopNav";
import { BestProducts } from "./components/BestProducts";
import { OnSaleProducts } from "./components/OnSaleProducts";
import { OnSaleBanner } from "./components/OnSaleBanner";
import { getProductsByOrder, getProductByLike } from "./apis/productService";
import { useState, useEffect } from "react";
import "./styleCom/app.css";
import "./styleCom/common.css";

function App() {
  // 정렬 state
  const [order, setOrder] = useState("recent");
  // 베스트 상품 state
  const [bestProducts, setBestProducts] = useState([]);
  // 판매 중인 상품 state
  const [onSaleProducts, setOnSaleProducts] = useState([]);

  //좋아요 순으로 정렬된 리스트 4개 가져와서 setState
  useEffect(() => {
    async function getProducts() {
      const response = await getProductByLike();
      setBestProducts(response.list);
    }
    getProducts();
  }, []);

  //드롭다운으로 정렬 종류 받아서 10개 가져오기
  useEffect(() => {
    async function getOnSaleProducts(order = { order }) {
      const response = await getProductsByOrder();
      setOnSaleProducts(response.list);
    }
    getOnSaleProducts(order);
  }, [order]);

  const handleRecent = () => setOrder("recent");
  const handleLike = () => setOrder("favorite");

  return (
    <div className="wrap">
      <TopNav />
      <section className="contentsBody">
        <div className="bestProducts">
          <div>
            <div className="textBold">베스트 상품</div>
            <BestProducts items={bestProducts} imgSize="bigImg" />
          </div>
        </div>
        <div className="onSaleProducts">
          <div className="onSaleCon">
            <OnSaleBanner />
            <div className="productGrid">
              <OnSaleProducts items={onSaleProducts} imgSize="smallImg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
