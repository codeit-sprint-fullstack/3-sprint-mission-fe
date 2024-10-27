import "../styleCom/common.css";
import "../styleCom/onSale.css";
import Dropdown from "./DropDown";

export function OnSaleBanner({ options, order, orderChange }) {
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
        <Dropdown
          options={options}
          selectedOrder={order}
          orderChange={orderChange}
        />
      </div>
    </div>
  );
}
