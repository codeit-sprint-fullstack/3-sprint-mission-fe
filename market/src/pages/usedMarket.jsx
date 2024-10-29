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

export default function UsedMarket() {
  const [sellLimit, setSellLimit] = useState(10);
  const sellProduct = useItmeList([], sellLimit);
  const [sellItmeSize, setSellItemSize] = useState("220px");
  const [arrType, setArrType] = useState("recent");

  const searchHandle = useChange();
  const searchRef = useRef(null);

  const searchKewordHandle = (e) => {
    if (e.keyCode === 13 || e.type.toString() === "click") {
    }
  };
  const selectHandle = (e) => {
    e.preventDefault();
    setArrType(e.target.value);
  };
  return (
    <div className="app">
      <div className="container">
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
      </div>
    </div>
  );
}
