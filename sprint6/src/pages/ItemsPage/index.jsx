import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './index.css';
// images
import arrowImg from "../../img/icons/menu.png";
import leftArrow from "../../img/icons/left.png";
import rightArrow from "../../img/icons/right.png";
import defaultImg from "../../img/default/FE_default_Img.png";
// jsx
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Prods from "./component/Prods/index.jsx";
import EmptyBox from "./component/EmptyBox/index.jsx";
//api
import getProducts from "../../api/getProductsApi.js";
// import getPageSize from "./common/getPageSize.js";

const PRODS_LIST = "page=1&pageSize=10&orderBy=recent";

function ItemsPage() {
  // Use State
  const [prodsList, setProdsList] = useState([]); // 판매 중인 상품
  const [filter, setFilter] = useState(false); // 필터 메뉴 Hide
  const [searchProdInput, setSearchProdInput] = useState(); // 상품 검색시 검색한 텍스트가 담김
  const [emptyBox, setEmptyBox] = useState(false); // 상품 검색 목록이 없을 때 나오는 메시지
  const [filterSort, setFilterSort] = useState("최신순"); // 필터 글씨 바꾸기

  // 화면이 켜지자마자 렌더링
  const loadHandle = async () => {
    const products = await getProducts(PRODS_LIST);
    setProdsList(products.list);
  };

  useEffect(() => {
    loadHandle();
  }, []);

  // 판매 중인 상품 렌더링
  const ProductSort = ({ sort }) => {
    return sort.map((prod) => {
      return (
        <Prods
          key={prod.id}
          price={prod.price}
          images={defaultImg}
          name={prod.name}
          favoriteCount={prod.favoriteCount}
        />
      );
    });
  };

  // 최근순 렌더링
  const recentSortHandle = async () => {
    const products = await getProducts(PRODS_LIST);
    setProdsList(products.list);
    console.log(products.list);
  };

  const recentFilterHandle = () => {
    filterHideHandle(); // 필터 메뉴 Hide 이벤트
    recentSortHandle(); // 최근순 렌더링 작동
    setEmptyBox(false); // EmptyBox(상품 없을 때) 사라지게 함.
    setFilterSort("최신순"); // 필터 메뉴 텍스트 바뀜.
  };

  const likeFilterHandle = async () => {
    filterHideHandle(); // 필터 메뉴 Hide 이벤트
    setEmptyBox(false); // EmptyBox(상품 없을 때) 사라지게 함.
    setFilterSort("좋아요순"); // 필터 메뉴 텍스트 바뀜.
  };

  // 상품 검색
  const searchProdHandle = async (e) => {
    const query = `keyword=${searchProdInput}`;
    const searchedProd = await getProducts(query);
    if (e) {
      if (searchedProd.list.length === 0) {
        setEmptyBox(true);
        return setProdsList(searchedProd.list);
      }
      setEmptyBox(false);
      return setProdsList(searchedProd.list);
    }
  };

  const searchprodInput = (e) => {
    setSearchProdInput(e.target.value);
    searchProdHandle(e.key);
  };

  // 필터 종류에 따른 페이지 버튼 핸들러
  const PageButtonRenderHandle = () => {
      return <PageButtonRecent />
  };

  // 페이지네이션 버튼 RECENT
  const PageButtonRecent = () => {
    const pageNationHndle = async (e) => {
      const query = `page=${e.target.textContent}&pageSize=10`;

      const prodsList = await getProducts(query);
      setProdsList(prodsList.list);
    };
    const button = [];

    for (let i = 1; i <= 5; i++) {
      button.push(
        <button key={i} onClick={pageNationHndle}>
          {i}
        </button>
      );
    }
    return button;
  };

  // 필터 메뉴에 hide 이벤트
  const filterHideHandle = () => {
    setFilter(!filter);
  };

  return (
    <>
      <Header />
      <div id="ItesPagemainContent">
        <section id="prodsList">
          <div id="prodsListHead">
            <h1 id="title">판매 중인 상품</h1>
            <div id="filterMenuBox" className={filter ? "" : "none"}>
              <button
                onClick={recentFilterHandle}
                id="filterMenuRecent"
                className="filterMenu"
              >
                최신순
              </button>
              <button
                onClick={likeFilterHandle}
                id="filterMenuLike"
                className="filterMenu"
              >
                좋아요순
              </button>
            </div>
            <div id="formContain">
              <input
                className="searchInput"
                type="text"
                placeholder="검색할 상품을 입력해주세요"
                onKeyDown={searchprodInput}
              ></input>
              <Link to="/register">
                <button id="addProdButton">상품 등록하기</button>
              </Link>
              <button
                onClick={filterHideHandle}
                className="filterMenu"
                id="filterMenuList"
              >
                {filterSort}
                <img src={arrowImg} id="arrowImg" alt="arrow" />
              </button>
            </div>
          </div>
          <div id="componentBox">
            <ProductSort sort={prodsList} />
            <EmptyBox run={emptyBox} />
          </div>
          <div id="pageNumBox">
            <button>
              <img src={leftArrow} alt="left arrow" />
            </button>
            <PageButtonRenderHandle />
            <button style={{ marginRight: "0" }}>
              <img
                src={rightArrow}
                style={{ left: "0.1rem" }}
                alt="right arrow"
              />
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ItemsPage;
