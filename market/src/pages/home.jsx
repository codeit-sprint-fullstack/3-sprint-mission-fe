import "../css/home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="visual">
        <div className="content">
          <div className="txtBox">
            <h2>
              일상의 모든 물건을 <br />
              거래해 보세요
            </h2>
            <a href="./items.html">구경하러 가기</a>
          </div>
          <img src="./img/Img_home_top.png" alt="판다이미지" />
        </div>
      </div>
      <HomeSection
        h2={["인기 상품을 ", " 확인해 보세요"]}
        h4={"Hot item"}
        p={["가장 HOT한 중고거래 물품을", " 판다 마켓에서 확인해 보세요"]}
        img={"./img/Img_home_01.png"}
      />
      <HomeSection
        h2={["구매를 원하는 ", "상품을 검색하세요"]}
        h4={"Search"}
        p={["구매하고 싶은 물품은 검색해서", "쉽게 찾아보세요"]}
        img={"./img/Img_home_02.png"}
        left={true}
      />
      <HomeSection
        h2={["판매를 원하는", "상품을 등록하세요"]}
        h4={"Register"}
        p={["어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요"]}
        img={"./img/Img_home_03.png"}
      />
      <div className="visual bottomVisual">
        <div className="content">
          <div className="txtBox">
            <h2>
              믿을 수 있는 <br />
              판다마켓 중고 거래
            </h2>
          </div>
          <img src="./img/Img_home_bottom.png" alt="" />
        </div>
      </div>
    </div>
  );
}

function HomeSection({ h4, h2, p, img, left }) {
  left = left ? "left" : "";
  return (
    <div className="section">
      <div className="content">
        {!!!left ? <img src={img} alt={h4} /> : null}
        <div className={`txtBox ${left}`}>
          <div class="abs">
            <h4>{h4}</h4>
            <h2>
              {h2[0]}
              <br />
              {h2[1]}
            </h2>
            <p>
              {p[0]} <br />
              {p[1]}
            </p>
          </div>
        </div>
        {left ? <img src={img} alt={h4} /> : null}
      </div>
    </div>
  );
}
