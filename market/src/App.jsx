import "./css/app.css";
import Header from "./component/header";
import { useEffect, useState } from "react";
import { productsGet } from "./api/product";
import MarketSection, { MarketPageNavi } from "./component/marketSection";
import { useItmeList, usePageNavi } from "./hook/hook";
let init = {
  paddingTop: "70px",
};
function App() {
  const bestProduct = useItmeList([], 4);
  const sellProduct = useItmeList([], 10);
  const [onTarget, setOnTarget] = useState(1);
  const pageNavi = usePageNavi(1, 5);
  useEffect(() => {
    productsGet(1, bestProduct.length, "favorite")
      .then((res) => {
        bestProduct.setValue(res.list);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    productsGet(onTarget, sellProduct.length, "recent")
      .then((res) => {
        sellProduct.setValue(res.list);
      })
      .catch((err) => console.error(err));
  }, [onTarget]);
  const pageNaviEvent = (e) => {
    setOnTarget(Number(e.target.textContent));
  };
  return (
    <div className="App" style={init}>
      <Header />
      <div className="container">
        <MarketSection
          className={"best"}
          title={"베스트 상품"}
          data={bestProduct.value}
          itemMaxWidth={"282px"}
          skeletonLength={bestProduct.length}
        />
        <MarketSection
          className={"sell"}
          title={"판매 중인 상품"}
          data={sellProduct.value}
          itemMaxWidth={"220px"}
          skeletonLength={sellProduct.length}
        ></MarketSection>
        <MarketPageNavi
          start={pageNavi.start}
          last={pageNavi.last}
          target={onTarget}
          onClick={pageNaviEvent}
        />
      </div>
    </div>
  );
}

export default App;
