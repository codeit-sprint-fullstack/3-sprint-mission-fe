import { ProductListResponse } from "@/types/products";
import ProductCard from "@/components/items/ProductCard";

type BestProductsProps = {
  items: ProductListResponse;
};

const BestProducts = ({ items }: BestProductsProps) => {
  if (!items) return <p>상품을 불러올 수 없습니다.</p>;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">베스트 상품</h2>
      <ul className="flex gap-6">
        {items.list.map((item) => (
          <ProductCard key={item.id} item={item} type="best" />
        ))}
      </ul>
    </div>
  );
};

export default BestProducts;
