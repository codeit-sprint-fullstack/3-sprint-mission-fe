import "./main.css";
import { useState, useEffect } from "react";
import { getProductsApi } from "../../api/api.js";
import { getItemApi } from "../../api/api.js";
import { Item } from "../items/Item.js";
// import Shearch from "../img/shearch.png";

export function Main() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  // 1. api받아오고 : 초기부터 불러와야하니까 api는 useEffect안에서 불러오기
  // 2. 받아온 데이터를 useState에 넣고,
  // 3. 그거를 map돌려서 렌더링
  const [totalLength, setTotalLength] = useState(0);
  const [sellCount, setSellCount] = useState(10);
  const [winSize, setWinSize] = useState(1920);

  const arr = [];
  useEffect(() => {
    const settingProduct = async () => {
      const data = await getProductsApi();
      // console.log(data);
      setProducts(data.list);
      setTotalLength(data.totalCount / sellCount);
      // 160 /10 = 16
      // console.log("나누기 이건 먹냐", totalLength);
    };
    settingProduct();
    window.addEventListener("resize", () => {
      setWinSize(window.innerWidth);
    });
  }, []);
  const [startPage, setStartPage] = useState(1);
  const [lastPage, setLastPage] = useState(5);
  const [text, setText] = useState("");

  for (let i = startPage; i <= lastPage; i++) {
    arr.push(i);
  }

  const [item, setItem] = useState([]);
  const [oderby, setOderby] = useState("recent");

  useEffect(() => {
    // 렌더링 되는 거 넣기
    const settingItem = async () => {
      const data = await getItemApi(page, sellCount, oderby);
      setItem(data.list);
    };

    settingItem();
  }, [page, sellCount, oderby]);

  //검색 기능
  const searchItem = async (e) => {
    e.preventDefault();
    const data = await getItemApi(1, sellCount, oderby, text);
    // console.log(data);
    setItem(data.list);
    setTotalLength(Math.ceil(data.totalCount / sellCount));
  };
  const searchInput = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const selecChange = (e) => {
    e.preventDefault();
    setOderby(e.target.value);
  };

  const onClickHandle = (event) => {
    setPage(Number(event.target.textContent));
  };

  //후
  const nextHandle = (e) => {
    if (page < totalLength) {
      setPage(page + 1);
      if (page % 5 === 0) {
        console.log(startPage, lastPage);
        setStartPage(startPage + 5);
        setLastPage(lastPage + 5);
      }
    } else alert("마지막 페이지");
  };

  //전
  const beforeHandle = (e) => {
    if (page > 1) {
      setPage(page - 1);
      if (page % 5 === 1) {
        setStartPage(startPage - 5);
        setLastPage(lastPage - 5);
      }
    } else alert("첫번째 페이지");
  };

  // const [val,set] = useState(맨처음값)
  // 변수 하나 만들고 set 함수 쓰고싶어 그럼 보통  useEffect(),
  // 새로운 함 수를 하나 만들어 그러고 그언애 set함수 실행
  //  if() for map []

  //미디어 쿼리
  useEffect(() => {
    switch (true) {
      case winSize < 1200 && winSize >= 744:
        setSellCount(6);
        const settingItem = async () => {
          const data = await getItemApi(page, sellCount, "recent");
          // console.log("aaa", data);
          setItem(data.list);
        };
        settingItem();
        break;
      // case :
    }

    // console.log(winSize);
  }, [winSize]);

  useEffect(() => {
    window.addEventListener("load", () => {
      switch (true) {
        case winSize < 1200 && winSize >= 744:
          setSellCount(6);
          const settingItem = async () => {
            const data = await getItemApi(page, sellCount, "recent");
            // console.log("aaa", data);
            setItem(data.list);
          };
          settingItem();
          break;
        // case :
      }
    });
  }, []);

  // const [스테이트, 셋스테이트] = useState("값");
  // const 온체인지함수 = (이벤트) => {
  //   이벤트.preventDefault()
  //   셋스테이트(이벤트.target.value)
  // }
  // <input onChange={온체인지함수} value={스테이트}/>

  return (
    <div className="product_inner">
      <div className="best_product_inner">
        <h2>베스트상품</h2>
        <div className="item_box big">
          {products.map((item, index) => {
            return (
              <Item
                key={index}
                name={item.name}
                price={item.price}
                imgUrl={item.images[0]}
                likeCount={item.favoriteCount}
                imgStyle={{
                  width: "281px",
                  height: "281px",
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="sell_product_inner">
        <div className="top">
          <h2>판매 중인 상품</h2>
          <div className="right_box">
            <div className="input_box">
              <a href="#" onClick={searchItem}>
                <img src="../../common/img/search.png" />
              </a>
              <input
                onChange={searchInput}
                // value={text}
                type="text"
                placeholder={"검색할 상품을 입력해주세요"}
              />
            </div>
            <button>상품 등록하기</button>
            <select onChange={selecChange} value={oderby} className="default">
              <option value="recent">최신순</option>
              <option value="favorite">인기순</option>
            </select>
            {/* <div className="default">
              <span>최신순</span>
              <img src={Polygon} />
              <img />
            </div> */}
          </div>
        </div>
        <div className="item_box small">
          {item.map((item, index) => {
            return (
              <Item
                key={index}
                name={item.name}
                price={item.price}
                imgUrl={item.images[0] || "https://example.com/..."}
                likeCount={item.favoriteCount}
                imgStyle={{
                  width: "220px",
                  height: "220px",
                }}
              />
            );
          })}
        </div>
        <ul>
          <li onClick={beforeHandle}>전</li>
          {arr.map((v, index) => {
            if (v <= totalLength) {
              let onColor = "";
              if (v === page) {
                onColor = "on_color";
              }
              return (
                <li onClick={onClickHandle} key={index} className={onColor}>
                  {v}
                </li>
              );
            }
          })}
          <li onClick={nextHandle}>후</li>
        </ul>
      </div>
    </div>
  );
}
