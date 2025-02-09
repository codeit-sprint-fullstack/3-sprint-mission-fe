import Product from "@/components/ProductDetail/Product";
import { useQuery } from "@tanstack/react-query";
import getProducts from "@/lib/api"; // getProducts 함수를 올바른 경로에서 가져오기

// Product 타입 정의
type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  tags: string[];
  createdAt: string;
  favoriteCount: number;
};

type ProductListProps = {
  products?: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  const { data, isLoading, error } = useQuery<Product[], Error>({ queryKey: ["products"], queryFn: getProducts });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {(data || []).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

