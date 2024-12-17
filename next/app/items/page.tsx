"use client"
// import "../css/app.css";
import { useEffect, useRef, useState } from "react";
import MarketSection, { MarketPageNavi } from "../shared/components/marketSection";
import {
  useChange,
  useItmeList,
  usePageNavi,
} from "../shared/hook/hook";
import Layout from '../shared/components/layout'
import Link from "next/link";
import { productsGet } from "../shared/api/product";

export default function UsedMarket() {
  const naviLimit = 5;
  const [sellLimit, setSellLimit] = useState(10);
  const sellProduct = useItmeList([{}], sellLimit);
  const [sellItmeSize, setSellItemSize] = useState("220px");
  const [arrType, setArrType] = useState("recent");
  const [onTarget, setOnTarget] = useState(1);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState("");
  const pageNavi = usePageNavi(1, 5);
  const searchHandle = useChange();
  const searchRef = useRef(null);

  function GetItems(page:any, pageSize:any, orderBy:any, keyword:any) {
    productsGet(page, pageSize, orderBy, keyword)
      .then((res:any) => {
        if (res.success) {
          sellProduct.setValue(res.data);
          setTotal(res.totalCount / sellLimit);
        }
      })
      .catch((err:any) => console.error(err));
  }
  useEffect(() => {
    GetItems(onTarget, sellLimit, arrType, searchHandle.value);
  }, [onTarget]);

  const searchKewordHandle = (e:any) => {
    if (e.keyCode === 13 || e.type.toString() === "click") {
      setOnTarget(1);
      pageNavi.setStart(1);
      pageNavi.setLast(5);
      GetItems(1, sellLimit, arrType, searchHandle.value);
    }
  };
  const selectHandle = (e:any) => {
    e.preventDefault();
    setArrType(e.target.value);
  };
  const pageNaviEvent = (e:any) => {
    setOnTarget(Number(e.target.textContent));
  };
  const nextEvent = (e:any) => {
    e.preventDefault();
    const pageNum = Math.floor(onTarget / naviLimit);
    if (onTarget % naviLimit === 0) {
      pageNavi.setStart(pageNum * naviLimit + 1);
      pageNavi.setLast((pageNum + 1) * naviLimit);
    }
    setOnTarget(onTarget + 1);
  };
  const privousEvent = (e:any) => {
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
          <Link href="/registration">상품등록하기</Link>
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
    </Layout>
  );
}
