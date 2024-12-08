import "./RealMain.css";

export function RealMain() {
  return (
    <>
      <div className="main_visual">
        <div className="main_inner">
          <div className="mv_text">
            <span className="main_span">
              일상의 모든 물건을
              <br />
              거래해 보세요
            </span>
            <button className="btn">
              <a href="./sub/items.html">구경하러 가기</a>
            </button>
          </div>
          <div className="txt_img">
            <img src="./img/hero-image.png" alt="팬더그림" />
          </div>
        </div>
      </div>
      <div className="con">
        <div className="con_inner">
          <img src="./img/feature1-image.png" alt="인기상품" />
          <div className="con_txt">
            <h6>Hot item</h6>
            <span>
              인기 상품을
              <br />
              확인해 보세요
            </span>
            <p>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </div>
      <div className="con">
        <div className="con_inner">
          <img src="./img/feature2-image.png" alt="구매상품" />
          <div className="con_txt">
            <h6>Search</h6>
            <span>
              구매를 원하는
              <br />
              상품을 검색하세요
            </span>
            <p>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
      </div>
      <div className="con">
        <div className="con_inner">
          <img src="./img/feature3-image.png" alt="판매상품" />
          <div className="con_txt">
            <h6>Register</h6>
            <span>
              판매를 원하는
              <br />
              상품을 등록하세요
            </span>
            <p>
              어떤 물건이든 판매하고 싶은
              <br />
              상품을 쉽게 등록하세요
            </p>
          </div>
        </div>
      </div>
      <div className="bottom_banner">
        <div className="banner_inner">
          <span>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </span>
          <img src="./img/bottom-banner-image.png" alt="상품이미지" />
        </div>
      </div>
    </>
  );
}
