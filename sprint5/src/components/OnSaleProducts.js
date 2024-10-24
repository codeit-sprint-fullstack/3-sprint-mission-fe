import { ProductInfo } from "./ProductInfo";
import "../styleCom/onSale.css";

export function OnSaleProducts({ items, imgSize }) {
  return (
    <>
      {items.map((product) => (
        <ProductInfo
          key={product.id}
          img={product.images}
          name={product.name}
          price={product.price}
          like={product.favoriteCount}
          imgSize={imgSize}
        />
      ))}
    </>
  );
}
