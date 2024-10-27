import { useState, useEffect } from "react";
import getProducts from "../API/api.js";
import './Main.css';
import arrowImg from "../img/icons/menu.png";
import leftArrow from "../img/icons/left.png";
import rightArrow from "../img/icons/right.png";
import BestProdsList from "./BestProdsList.js";
import ProdsList from "./ProdsList.js";

const BEST_PRODS_LIST = 'page=1&pageSize=4&orderBy=favorite';
const PRODS_LIST = 'page=1&pageSize=10&orderBy=recent';

function Main() {
  // Use State
  const [bestProds, setBestProds] = useState([]); // 베스트 상품
  const [prodsList, setProdsList] = useState([]); // 판매 중인 상품

  // 화면이 켜지자마자 렌더링
  const loadHandle = async () => {
    const bestProducts = await getProducts(BEST_PRODS_LIST);
    const products = await getProducts(PRODS_LIST);
    setBestProds(bestProducts.list);
    setProdsList(products.list);
  }

  useEffect(() => {
    loadHandle()
  }, [])

  // 판매 중인 상품 렌더링
  const ProductSort = ({ sort }) => {

    return (
      sort.map((prod) => {
        return <ProdsList price={prod.price} images={prod.images} name={prod.name} favoriteCount={prod.favoriteCount} />
      })
    )
  }

  return (
    <main>
      <div id='mainContent'>
        <h1>베스트 상품</h1>
        <section id='bestProdsList'>
          {
            bestProds.map((prod) => {
              return <BestProdsList price={prod.price} images={prod.images} name={prod.name} favoriteCount={prod.favoriteCount} />
            })
          }
        </section>

        <section id='prodsList'>
          <div id='prodsListHead'>
            <h1 id='title'>판매 중인 상품</h1>
            <div id='formContain'>
              <input id='serchInput' type='text' placeholder='검색할 상품을 입력해주세요'></input>
              <button id='addProdButton'>상품 등록하기</button>
              <button id='filterMenu'>최신순
                <img src={arrowImg} id='arrowImg' />
              </button>
            </div>
          </div>
          <div id='componentBox'>
            <ProductSort sort={prodsList} />
          </div>
          <div id='pageNumBox'>
            <button>
              <img src={leftArrow} />
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button style={{ marginRight: '0' }}>
              <img src={rightArrow} style={{ left: '0.1rem' }} />
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Main;