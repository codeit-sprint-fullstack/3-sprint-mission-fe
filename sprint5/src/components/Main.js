import './Main.css';
import arrowImg from "../img/icons/menu.png";
import leftArrow from "../img/icons/left.png";
import rightArrow from "../img/icons/right.png";
import BestProdsList from "./BestProdsList";
import ProdsList from "./ProdsList"

function Main() {

  return (
    <main>
      <div id='mainContent'>
        <h1>베스트 상품</h1>
        <section id='bestProdsList'>
          <BestProdsList />
          <BestProdsList />
          <BestProdsList />
          <BestProdsList />
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
            <ProdsList />
            <ProdsList />
            <ProdsList />
            <ProdsList />
            <ProdsList />
            <ProdsList />
            <ProdsList />
            <ProdsList />
            <ProdsList />
            <ProdsList />
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