import "../styleCom/common.css";

export function ProductInfo({ img, name, price, like, imgSize }) {
  return (
    <div className="productInfo">
      <img src={img} className={imgSize} alt={name}></img>
      <div>{name}</div>
      <div>{price}원</div>
      <div>♡ {like}</div>
    </div>
  );
}
