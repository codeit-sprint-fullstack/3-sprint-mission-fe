import BestProductInfo from "./BestProductInfo";
import styles from "./BestProducts.module.css";
import Link from "next/link";

export function BestProducts({ products }) {
  return (
    <div className={styles.bestProductCon}>
      {products.map((product) => (
        <Link key={product.id} href={`items/${product.id}`} style={{ textDecoration: "none" }}>
          <BestProductInfo
            name={product.name}
            price={product.price}
            like={product.favoriteCount}
            images={product.images}
          />
        </Link>
      ))}
    </div>
  );
}
