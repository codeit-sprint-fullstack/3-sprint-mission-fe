import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetailContent from "../../components/ProductDetailContent";
import CommentSection from "../../components/Commentsection";
import ConfirmationModal from "../../components/ConfirmationModal";
import styles from "../../styles/ProductDetail.module.css";
import Link from "next/link";

const ProductDetailPage = () => {
  const router = useRouter();
  const { itemId } = router.query;
  const [product, setProduct] = useState(null); // 상품 데이터
  const [comments, setComments] = useState([]); // 댓글 데이터
  const [showDeleteModal, setShowDeleteModal] = useState(false); // 삭제 확인 모달
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지

  // 상품 상세 데이터 불러오기
  useEffect(() => {
    const fetchProduct = async () => {
      if (!itemId) {
        console.log("Item ID가 아직 정의되지 않았습니다.");
        return;
      }

      try {
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

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error.message);
        setErrorMessage(error.message);
      }
    };

    if (itemId) {
      fetchProduct();
    }
  }, [itemId]);

  // 댓글 데이터 불러오기
  useEffect(() => {
    const fetchComments = async () => {
      

      if (!itemId) {
        console.log("Item ID가 아직 정의되지 않았습니다.");
        return;
      }

      const url = `https://panda-market-api.vercel.app/products/${itemId}/comments?limit=10`; // URL 정의
      console.log("API URL:", url); // URL 출력

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${itemId}/comments?limit=10`);
        if (!res.ok) {
          throw new Error("댓글 데이터를 불러오지 못했습니다.");
        }

        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    if (itemId) {
      fetchComments();
    }
  }, [itemId]);

  // 상품 삭제
  const handleDeleteProduct = async () => {
    try {
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

      setShowDeleteModal(false);
      router.push("/items"); // 삭제 후 목록으로 이동
    } catch (error) {
      console.error(error.message);
      setErrorMessage("상품 삭제에 실패했습니다.");
    }
  };

  // 좋아요 토글
  const handleLikeToggle = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const method = product.isLiked ? "DELETE" : "POST";

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${itemId}/favorite`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("좋아요/취소 실패");
      }

      setProduct((prev) => ({
        ...prev,
        isLiked: !prev.isLiked,
      }));
    } catch (error) {
      console.error(error.message);
    }
  };

  // 삭제 확인 모달 열기
  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  // 삭제 확인 모달 닫기
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  if (!itemId) {
    return <div>로딩 중... (아이디를 확인 중입니다)</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!product) {
    return <div>로딩 중... (상품 데이터를 불러오는 중입니다)</div>;
  }

  return (
  <div className={styles.productDetailPage}>
    <div className={styles.contentWrapper}>
      <ProductDetailContent
        product={product}
        onLikeToggle={handleLikeToggle}
        onDelete={openDeleteModal}
      />

      <CommentSection
        comments={comments}
        productId={itemId}
        setComments={setComments}
      />

      {showDeleteModal && (
        <ConfirmationModal
          message="정말로 삭제하시겠습니까?"
          onConfirm={handleDeleteProduct}
          onCancel={closeDeleteModal}
        />
      )}
    </div>
    <Link href="/items">
      <button className={styles.backbutton}>목록으로 돌아가기</button>
    </Link>  
  </div>
  );
};

export default ProductDetailPage;
