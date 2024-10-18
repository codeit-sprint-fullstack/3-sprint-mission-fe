import "./css/app.css";
import Header from "./component/header";
import { useEffect, useState } from "react";
import { productsGet } from "./api/product";
import MarketSection from "./component/marketSection";
import { useItmeList } from "./hook/hook";
let init = {
  paddingTop: "70px",
};
function App() {
  const bestProduct = useItmeList([], 4);
  const sellProduct = useItmeList([], 170);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    productsGet(1, bestProduct.length, "favorite")
      .then((res) => {
        bestProduct.setValue(res.list);
      })
      .catch((err) => console.error(err));
    productsGet(1, sellProduct.length, "recent")
      .then((res) => {
        console.log(res);
        sellProduct.setValue(res.list);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    console.log(bestProduct.value);
  }, [bestProduct]);
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
      </div>
    </div>
  );
}

export default App;
