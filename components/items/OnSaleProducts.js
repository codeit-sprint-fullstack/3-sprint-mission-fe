import OnSaleProductInfo from "./OnSaleProductInfo";
import Link from "next/link";

export function OnSaleProducts({ products }) {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} href={`items/${product.id}`} style={{ textDecoration: "none" }}>
        <OnSaleProductInfo
          
          name={product.name}
          price={product.price}
          like={product.favoriteCount}
          images={product.images}
        />
        </Link>
      ))}
    </>
  );
}
