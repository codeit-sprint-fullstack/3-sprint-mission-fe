import "../css/items.css";
import { useEffect, useRef, useState } from "react";
import MarketSection, { MarketPageNavi } from "../component/marketSection";
import {
  useChange,
  useItmeList,
  usePageNavi,
  useScreenSize,
} from "../hook/hook";
import Layout from "../component/layout";
import { Link } from "react-router-dom";
import { productsGet } from "../api/product";

export default function UsedMarket() {
  const naviLimit = 5;
  const [sellLimit, setSellLimit] = useState(10);
  const sellProduct = useItmeList([], sellLimit);
  const [sellItmeSize, setSellItemSize] = useState("220px");
  const [arrType, setArrType] = useState("recent");
  const [onTarget, setOnTarget] = useState(1);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState("");
  const pageNavi = usePageNavi(1, 5);
  const searchHandle = useChange();
  const searchRef = useRef(null);
  const windowSize = useScreenSize();

  function GetItems(page, pageSize, orderBy, keyword) {
    productsGet(page, pageSize, orderBy, keyword)
      .then((res) => {
        if (res.success) {
          sellProduct.setValue(res.data);
          setTotal(res.totalCount / sellLimit);
        }
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    window.addEventListener("load", () => {
      switch (true) {
        case window.innerWidth < 1200 && window.innerWidth >= 744:
          setTimeout(() => {
            GetItems(1, 6, arrType, keyword);
            setSellItemSize("221px");
            setSellLimit(6);
          }, 50);
          break;
        case window.innerWidth < 744:
          setTimeout(() => {
            GetItems(1, 4, arrType, keyword);
            setSellItemSize("168px");
            setSellLimit(4);
          }, 50);
          break;
        default:
          setTimeout(() => {
            setSellItemSize("220px");
          }, 50);
          break;
      }
    });
  }, []);

  useEffect(() => {
    switch (true) {
      case windowSize < 1200 && windowSize >= 744:
        sellProduct.setLength(6);
        setSellLimit(6);
        setSellItemSize("221px");
        break;
      case windowSize < 744:
        sellProduct.setLength(4);
        setSellItemSize("168px");
        setSellLimit(4);
        break;
      default:
        sellProduct.setLength(10);
        setSellLimit(10);
        setSellItemSize("220px");
        break;
    }
  }, [windowSize]);

  useEffect(() => {
    GetItems(onTarget, sellLimit, arrType, searchHandle.value);
  }, [onTarget]);

  const searchKewordHandle = (e) => {
    if (e.keyCode === 13 || e.type.toString() === "click") {
      setOnTarget(1);
      pageNavi.setStart(1);
      pageNavi.setLast(5);
      GetItems(1, sellLimit, arrType, searchHandle.value);
    }
  };
  const selectHandle = (e) => {
    e.preventDefault();
    setArrType(e.target.value);
  };
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
  return (
    <Layout>
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
          <Link to="/registration">상품등록하기</Link>
          <div className="sortIcon">
            <select onChange={selectHandle}>
              <option value="recent" defaultChecked>
                최신순
              </option>
              <option value="favorite">좋아요순</option>
            </select>
            <img src="./img/ic_sort.png" alt="" />
          </div>
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
    </Layout>
  );
}
