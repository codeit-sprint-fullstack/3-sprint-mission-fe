import "./css/app.css";
import Header from "./component/header";
import { useEffect, useRef, useState } from "react";
import { productsGet } from "./api/product";
import MarketSection, { MarketPageNavi } from "./component/marketSection";
import Footer from "./component/footer";
import { useChange, useItmeList, usePageNavi } from "./hook/hook";
let init = {
  paddingTop: "70px",
};
function App() {
  const sellLimit = 10;
  const naviLimit = 5;
  const bestProduct = useItmeList([], 4);
  const sellProduct = useItmeList([], sellLimit);
  const [onTarget, setOnTarget] = useState(1);
  const [arrType, setArrType] = useState("recent");
  const [total, setTotal] = useState(0);
  const pageNavi = usePageNavi(1, 5);
  const searchRef = useRef(null);
  const searchHandle = useChange();

  useEffect(() => {
    productsGet(1, bestProduct.length, "favorite")
      .then((res) => {
        bestProduct.setValue(res.list);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    productsGet(onTarget, sellProduct.length, arrType)
      .then((res) => {
        sellProduct.setValue(res.list);
        setTotal(res.totalCount / sellLimit);
      })
      .catch((err) => console.error(err));
  }, [onTarget, arrType]);
  const pageNaviEvent = (e) => {
    setOnTarget(Number(e.target.textContent));
  };
  const nextEvent = (e) => {
    e.preventDefault();
    const pageNum = Math.floor(onTarget / naviLimit);
    if (onTarget % naviLimit === 0) {
      pageNavi.setStart(pageNum * naviLimit + 1);
      pageNavi.setLast((pageNum + 1) * naviLimit);
    }
    setOnTarget(onTarget + 1);
  };
  const privousEvent = (e) => {
    e.preventDefault();
    if (onTarget % naviLimit === 1) {
      pageNavi.setStart(onTarget - naviLimit);
      pageNavi.setLast(onTarget - 1);
    }
    setOnTarget(onTarget - 1);
  };
  const selectHandle = (e) => {
    e.preventDefault();
    setArrType(e.target.value);
  };

  const searchKewordHandle = (e) => {
    if (e.keyCode === 13 || e.type.toString() === "click")
      productsGet(onTarget, sellProduct.length, arrType, searchHandle.value)
        .then((res) => {
          sellProduct.setValue(res.list);
          setTotal(res.totalCount / sellLimit);
        })
        .catch((err) => console.error(err));
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
        >
          <div className="marketEtc">
            <div className="searchBox">
              <button className="submit" onClick={searchKewordHandle}>
                <img src="./img/ic_search.svg" alt="search" />
              </button>
              <input
                type="text"
                ref={searchRef}
                onChange={searchHandle.onChange}
                onKeyDown={searchKewordHandle}
                className="marketSearch"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <a href="#">상품등록하기</a>
            <select onChange={selectHandle}>
              <option value="recent" defaultChecked>
                최신순
              </option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </MarketSection>
        <MarketPageNavi
          start={pageNavi.start}
          last={pageNavi.last}
          target={onTarget}
          onClick={pageNaviEvent}
          onNext={nextEvent}
          onPrivous={privousEvent}
          total={total}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
