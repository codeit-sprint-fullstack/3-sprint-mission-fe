import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ProductDetailContent from "../../components/ProductDetailContent";
import CommentSection from "../../components/Commentsection";
import ConfirmationModal from "../../components/ConfirmationModal";
import styles from "../../styles/ProductDetail.module.css";
import Link from "next/link";

const fetchProduct = async (itemId) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    throw new Error("로그인이 필요합니다.");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${itemId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("상품 데이터를 불러오지 못했습니다.");
  }
  return res.json();
};

const fetchComments = async (itemId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${itemId}/comments?limit=10`
  );
  if (!res.ok) {
    throw new Error("댓글 데이터를 불러오지 못했습니다.");
  }
  return res.json();
};

const deleteProduct = async (itemId) => {
  const token = localStorage.getItem("accessToken");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("상품 삭제 실패");
  }
};

const ProductDetailPage = () => {
  const router = useRouter();
  const { itemId } = router.query;
  const queryClient = useQueryClient();

  // 상품 데이터 쿼리
  const { data: product, error: productError, isLoading: isProductLoading } = useQuery({
    queryKey: ["product", itemId], // 객체 형식 사용
    queryFn: () => fetchProduct(itemId),
    enabled: !!itemId, // itemId가 존재할 때만 실행
  });

  // 댓글 데이터 쿼리
  const { data: comments, error: commentsError, isLoading: isCommentsLoading } = useQuery({
    queryKey: ["comments", itemId], // 객체 형식 사용
    queryFn: () => fetchComments(itemId),
    enabled: !!itemId,
  });

  // 상품 삭제 뮤테이션
  const deleteMutation = useMutation({
    mutationFn: () => deleteProduct(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      router.push("/items");
    },
    onError: (error) => {
      console.error(error);
      alert("상품 삭제에 실패했습니다.");
    },
  });
  

  if (isProductLoading || isCommentsLoading) {
    return <div>로딩 중...</div>;
  }

  if (productError || commentsError) {
    return <div>오류가 발생했습니다: {productError?.message || commentsError?.message}</div>;
  }

  return (
    <div className={styles.productDetailPage}>
      <div className={styles.contentWrapper}>
        <ProductDetailContent
          product={product}
          onLikeToggle={() => {
            queryClient.invalidateQueries(["product"]); // 좋아요 상태 변경 후 데이터 새로고침
          }}
          onDelete={() => deleteMutation.mutate()}
        />

        <CommentSection
          comments={comments}
          productId={itemId}
          setComments={(updatedComments) => queryClient.setQueryData(["comments", itemId], updatedComments)}
        />

        {deleteMutation.isLoading && <div>삭제 중...</div>}
      </div>
      <Link href="/items">
        <button className={styles.backbutton}>목록으로 돌아가기</button>
      </Link>
    </div>
  );
};

export default ProductDetailPage;
