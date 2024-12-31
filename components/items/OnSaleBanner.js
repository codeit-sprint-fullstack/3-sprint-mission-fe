import styles from "./OnSaleBanner.module.css";
import OrderDropDown from "../OrderDropDown";
import Link  from "next/link";

export function OnSaleBanner({ options, order, orderChange }) {
  // 검색기능 만들기
  return (
    <div className={styles.onSaleBanner}>
      <div className={styles.textBold}>판매 중인 상품</div>
      <div className={styles.rightBanner}>
        <input
          className="OnSaleInput"
          placeholder="검색할 상품을 입력해주세요"
        />
        <Link href="/createItem" className={styles.registerBt}>
          상품 등록하기
        </Link>
        <OrderDropDown
          options={options}
          order={order}
          orderChange={orderChange}
         />
      </div>
    </div>
  );
}
