import { ProductInfo } from "./ProductInfo";
import "../styleCom/best.css";
import "../styleCom/common.css";

// const bestProductList = await getProductByLike();

export function BestProducts({ items, imgSize }) {
  return (
    <div className="bestProductCon">
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
    </div>
  );
}
