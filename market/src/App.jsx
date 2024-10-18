import "./css/app.css";
import Header from "./component/header";
import { useEffect, useState } from "react";
import { productsGet } from "./api/product";
import MarketSection from "./component/marketSection";
let init = {
  paddingTop: "70px",
};
function App() {
  const [best, setBest] = useState([]);
  const [bestLength, setBestLength] = useState(4);
  useEffect(() => {
    productsGet(1, bestLength, "favorite")
      .then((res) => {
        setBest(res.list);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    console.log(best);
  }, [best]);
  return (
    <div className="App" style={init}>
      <Header />
      <div className="container">
        <MarketSection
          className={"best"}
          title={"베스트 상품"}
          data={best}
          itemMaxWidth={"282px"}
          skeletonLength={bestLength}
        />
      </div>
    </div>
  );
}

export default App;
