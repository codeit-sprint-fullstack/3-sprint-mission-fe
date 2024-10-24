import "../styleCom/common.css";
import "../styleCom/onSale.css";

export function OnSaleBanner() {
  return (
    <div className="onSaleBanner">
      <div className="textBold">판매 중인 상품</div>
      <div className="rightBanner">
        <input
          className="inputStyle"
          placeholder="검색할 상품을 입력해주세요"
        />
        <a className="likeBt" href="/login">
          <div>상품 등록하기</div>
        </a>
        <div>드롭다운</div>
      </div>
    </div>
  );
}
