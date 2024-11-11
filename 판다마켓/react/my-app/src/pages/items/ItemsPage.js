import "./used.css";
import { Item } from "./Item.js";
import { useEffect, useState } from "react";
import { getItemApi } from "../../api/api.js";
import searchImg from "../../common/img/search.png";
import { Link } from "react-router-dom";

export function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [sellCount, setSellCount] = useState(10);
  const [page, setPage] = useState(1);
  const [orderby, setOrderby] = useState("recent");
  const [img, setImg] = useState([]);

  useEffect(() => {
    const settingProduct = async () => {
      const data = await getItemApi(page, sellCount, orderby);
      // console.log("이게 찍히는거냐?", data.list);
      setProducts(data.list);
    };
    settingProduct();
  }, [page, sellCount, orderby]);

  // const [resize, setResize] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      // setResize(window.innerWidth <= 1200);
      if (window.innerWidth < 1200 && window.innerWidth > 744) {
        setSellCount(6);
      }
      if (window.innerWidth < 744) {
        setSellCount(4);
      }
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
  }, []);

  return (
    <div className="product_inner">
      <div className="sell_product_inner">
        <div className="top">
          <h2>판매 중인 상품</h2>
          <div className="right_box">
            <div className="input_box">
              <a href="#">
                <img src={searchImg} />
              </a>
              <input type="text" placeholder={"검색할 상품을 입력해주세요"} />
            </div>
            <Link to="/registration">
              <button>상품 등록하기</button>
            </Link>
            <select className="default">
              <option value="recent">최신순</option>
              <option value="favorite">인기순</option>
            </select>
          </div>
        </div>
        <div className="item_box big">
          {products.map((item, index) => {
            // console.log("이미지 길이", item.images);
            // 여튼 훌륭합니다.
            // 갓 수 정

            for (let i = 0; i < 4; i++) {
              return (
                <Item
                  key={index}
                  name={item.name}
                  price={item.price}
                  imgUrl={item.images[0]}
                  likeCount={item.favoriteCount}
                  imgStyle={{
                    width: "220px",
                    height: "220px",
                  }}
                  marginStyle={{
                    marginBottom: "40px",
                  }}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
