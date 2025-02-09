import styles from "@/styles/Product.module.css";
import Header from "@/components/header";
import AskInput from "@/components/ProductDetail/AskInput";
import ProductCommentList from "@/components/ProductDetail/ProductComment";
import Footer from "@/components/footer";
import FormatDate from "@/utils/Format";
import FormatCurrency from "@/utils/FormatCurrency";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query"; // React Query 사용
import axios from "@/lib/axios";
import Image from "next/image";
import { JSX } from "react";

interface Product {
  images: string;
  name: string;
  price: number;
  description: string;
  tags: string[];
  createdAt: string;
  favoriteCount: number;
}

interface Comment {
  id: number;
  content: string;
  createdAt: string;  // 추가
  user: { name: string; avatar: string }; // 추가
}

export default function IdProduct(): JSX.Element {
  const router = useRouter();
  const id = router.query["id"] as string;

  const { data: product, isLoading: isProductLoading, isError: isProductError } = useQuery<Product>({
  queryKey: ["product", id],  // ✅ queryKey를 객체 내에 설정
  queryFn: async () => {
    const res = await axios.get(`/products/${id}`);
    return res.data;
  },
  enabled: !!id,  // ✅ 올바르게 옵션 추가
});

const {
  data: productComments,
  isLoading: isCommentsLoading,
  isError: isCommentsError,
} = useQuery<Comment[]>({
  queryKey: ["productComments", id],
  queryFn: async () => {
    const res = await axios.get(`/products/${id}/comments`);
    return Array.isArray(res.data)
      ? res.data.map(comment => ({
          ...comment,
          createdAt: comment.createdAt ?? new Date().toISOString(),
          user: comment.user ?? { name: "익명", avatar: "/images/default-avatar.png" },
        }))
      : [];
  },
  enabled: !!id,
});
  if (isProductLoading || isCommentsLoading) {
    return <div>Loading...</div>;
  }

  if (isProductError || isCommentsError || !product) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.productContainer}>
          <div>
            <Image
              width={486}
              height={486}
              src={product.images}
              alt="product image"
              className={styles.productImage}
            />
          </div>
          <div>
            <h3 className={styles.productName}>{product.name}</h3>
            <h1 className={styles.productPrice}>
              {FormatCurrency(product.price)}원
            </h1>
            <Image
              width={690}
              height={1}
              src="/images/Vector.png"
              alt="Vector Image"
            />
            <div className={styles.descriptionWrapper}>
              <span className={styles.title}>상품소개</span>
              <span className={styles.productDescription}>
                {product.description}
              </span>
            </div>
            <div className={styles.tagWrapper}>
              <span className={styles.title}>상품태그</span>
              <span>#{product.tags.join(", #")}</span>
            </div>
            <div className={styles.userWrapper}>
              <div className={styles.infoContainer}>
                <Image
                  width={40}
                  height={40}
                  src="/images/userImg.png"
                  alt="userImage"
                  className={styles.userImg}
                />
                <div className={styles.infoWrapper}>
                  <span>총명한 판다</span>
                  <span>{FormatDate(product.createdAt)}</span>
                </div>
              </div>
              <div className={styles.favoriteWrapper}>
                <Image
                  width={32}
                  height={32}
                  src="/images/ic_heart.png"
                  alt="heartImage"
                />
                <span className={styles.favoriteCount}>
                  {product.favoriteCount}
                </span>
              </div>
            </div>
          </div>
          <Image
            width={1190}
            height={1}
            src="/images/Vector.png"
            alt="Vector Image"
          />
        </div>
      </div>
      <AskInput />
      <ProductCommentList comments={productComments ?? []} />
      <div>
        <Footer />
      </div>
    </div>
  );
}
