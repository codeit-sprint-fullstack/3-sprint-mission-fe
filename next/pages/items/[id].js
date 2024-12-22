import styles from "@/styles/Product.module.css"
import Header from "@/components/Product/Header";
import AskInput from "@/components/Product/AskInput";
import ProductCommentList from "@/components/Product/ProductComment";
import Footer from "@/components/footer";
import FormatDate from "@/utils/Format";
import FormatCurrencty from "@/utils/FormatCurrency"
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query"; // React Query 사용
import axios from "@/lib/axios";
import Image from "next/image";

export default function IdProduct() {
  const router = useRouter();
  const id = router.query["id"];
  const product = ({
    "name": "abc",
    "images": '/images/img_default.png',
    "price": 10000,
    "description": "abc",
    "tags": ["a", "b"],
    "favoriteCount": 3,
    "createdAt": "2024-12-07T15:44:02.782Z"
  });

  상품 데이터 가져오기
  const {
    data: product,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useQuery(
    ["product", id], // Query Key
    async () => {
      const res = await axios.get(`/products/${id}`);
      return res.data;
    },
    {
      enabled: !id, // id가 있을 때만 실행
    }
  );

  // 상품 댓글 데이터 가져오기
  const {
    data: productComments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQuery({
    queryKey: ["productComments", id], // Query Key
    queryFn: async () => {
      const res = await axios.get(`/products/${id}/comments`);
      return Array.isArray(res.data) ? res.data : [];
    },
    enabled: !!id, // id가 있을 때만 실행
  });
  

  // if (isProductLoading || isCommentsLoading) {
  //   return <div>Loading...</div>; // 로딩 상태 처리
  // }

  // if (isProductError || isCommentsError) {
  //   return <div>Failed to load data.</div>; // 에러 상태 처리
  // }

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
            <h1 className={styles.productPrice}>{FormatCurrencty(product.price)}원</h1>
            <Image 
              width={690}
              height={1}
              src="/images/Vector.png"
              alt="Vector Image"
            />
            <div className={styles.descriptionWrapper}>
              <span className={styles.title}>상품소개</span>
              <span className={styles.productDescription}>{product.description}</span>
            </div>
            <div className={styles.tagWrapper}>
              <span className={styles.title}>상품태그</span>
              <span>#{product.tags}</span>
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
                <span className={styles.favoriteCount}>{product.favoriteCount}</span>
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
      <ProductCommentList comments={productComments} />
      <div>
        <Footer />
      </div>
    </div>
  );
}
