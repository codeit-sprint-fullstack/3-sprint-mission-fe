import styles from "@/components/Product/Product.module.css";
import FormatDate from "@/utils/Format";
import Image from "next/image";

// Product 타입 정의
type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    tags: string[];
    createdAt: string;
    favoriteCount: number;
  };
};

export default function Product({ product }: ProductProps) {
  return (
    <div>
      <div>
        <Image width={486} height={486} src="/images/img_default.png" alt="product image" />
      </div>
      <div>
        <h3>{product.name}</h3>
        <h1>{product.price}</h1>
        <span>상품소개</span>
        <span>{product.description}</span>
        <span>상품태그</span>
        <span>{product.tags.join(", ")}</span>
        <div>
          <Image width={40} height={40} src="/images/userImg.png" alt="userImage" />
          <div>
            <span>총명한 판다</span>
            <span>{FormatDate(product.createdAt)}</span>
          </div>
        </div>
        <div>
          <Image width={32} height={32} src="/images/ic_heart.png" alt="heart icon" />
          <span>{product.favoriteCount}</span>
        </div>
      </div>
      <Image width={1190} height={1} src="/images/Vector.png" alt="Vector Image" />
    </div>
  );
}
