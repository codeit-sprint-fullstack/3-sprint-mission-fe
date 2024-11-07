import "../css/app.css";
import { useEffect, useRef, useState } from "react";
import { productsGet } from "../api/product";
import MarketSection, { MarketPageNavi } from "../component/marketSection";
import {
  useChange,
  useItmeList,
  usePageNavi,
  useScreenSize,
} from "../hook/hook";

export default function Market() {
  const [sellLimit, setSellLimit] = useState(10);
  const naviLimit = 5;
  const bestProduct = useItmeList([], 4);
  const sellProduct = useItmeList([], sellLimit);
  const [onTarget, setOnTarget] = useState(1);
  const [arrType, setArrType] = useState("recent");
  const [total, setTotal] = useState(0);
  const pageNavi = usePageNavi(1, 5);
  const searchRef = useRef(null);
  const searchHandle = useChange();
  const windowSize = useScreenSize();
  const [bestItmeSize, setBestItemSize] = useState("282px");
  const [sellItmeSize, setSellItemSize] = useState("220px");

  function BestProdcuts(page, pageSize, orderBy, keyword) {
    productsGet(page, pageSize, orderBy, keyword)
      .then((res) => {
        bestProduct.setValue(res.list);
      })
      .catch((err) => console.error(err));
  }
  function SellProdcuts(page, pageSize, orderBy, keyword) {
    productsGet(page, pageSize, orderBy, keyword)
      .then((res) => {
        sellProduct.setValue(res.list);
        setTotal(res.totalCount / sellLimit);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    BestProdcuts(1, bestProduct.length, "favorite");
  }, [bestProduct.length]);
  useEffect(() => {
    SellProdcuts(onTarget, sellProduct.length, arrType);
  }, [onTarget, arrType, sellLimit, sellProduct.length]);

  useEffect(() => {
    window.addEventListener("load", () => {
      switch (true) {
        case window.innerWidth < 1200 && window.innerWidth >= 744:
          setTimeout(() => {
            BestProdcuts(1, 2, "favorite");
            SellProdcuts(1, 6, arrType);
            setBestItemSize("343px");
            setSellItemSize("221px");
            setSellLimit(6);
          }, 50);
          break;
        case window.innerWidth < 744:
          setTimeout(() => {
            BestProdcuts(1, 1, "favorite");
            SellProdcuts(1, 4, arrType);
            setSellItemSize("168px");
            setSellLimit(4);
          }, 50);
          break;
        default:
          setTimeout(() => {
            BestProdcuts(1, 4, "favorite");
            setBestItemSize("282px");
            setSellItemSize("220px");
          }, 50);
          break;
      }
    });
  }, []);

  useEffect(() => {
    switch (true) {
      case windowSize < 1200 && windowSize >= 744:
        bestProduct.setLength(2);
        sellProduct.setLength(6);
        setSellLimit(6);
        setBestItemSize("343px");
        setSellItemSize("221px");
        break;
      case windowSize < 744:
        bestProduct.setLength(1);
        sellProduct.setLength(4);
        setSellItemSize("168px");
        setSellLimit(4);

        break;
      default:
        bestProduct.setLength(4);
        sellProduct.setLength(10);
        setSellLimit(10);
        setBestItemSize("282px");
        setSellItemSize("220px");
        break;
    }
  }, [windowSize]);

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
    <div className="App">
      <div className="container">
        <MarketSection
          className={"best"}
          title={"베스트 상품"}
          data={bestProduct.value}
          itemMaxWidth={bestItmeSize}
          skeletonLength={bestProduct.length}
        />
        <MarketSection
          className={"sell"}
          title={"판매 중인 상품"}
          data={sellProduct.value}
          itemMaxWidth={sellItmeSize}
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
    </div>
  );
}
