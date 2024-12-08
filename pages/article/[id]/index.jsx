import { useState } from "react";
import { useRouter } from "next/router";
import { articleAPI } from "@/lib/axios";
import CommentList from "@/components/CommentList";
import styles from "./index.module.css";

// 서버에서 데이터 가져오기
export async function getServerSideProps(context) {
  const { id } = context.params; // URL에서 ID 가져오기
  try {
    const response = await articleAPI.getArticleById(id);

    if (!response.data) {
      return {
        notFound: true, // 404로 리디렉션
      };
    }

    return {
      props: {
        article: response.data, // 데이터 전달
      },
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      notFound: true,
    };
  }
}

export default function ArticleDetail({ article, error }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleEdit = () => {
    router.push(`/article/${article.id}/edit`); // 상세 페이지로 이동
    setIsMenuOpen(false);
  };

  const handleDelete = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      try {
        await articleAPI.deleteArticle(article.id); // 삭제 API 호출
        alert("삭제되었습니다.");
        router.push("/community"); // 커뮤니티 목록으로 이동
      } catch (error) {
        console.error("삭제 중 오류 발생:", error);
        alert("삭제에 실패했습니다. 다시 시도해주세요.");
      } finally {
        setIsMenuOpen(false);
      }
    } else {
      setIsMenuOpen(false); // 취소 시 메뉴 닫기
    }
  };

  // 로딩 상태 처리
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // 에러 처리
  if (error) {
    return <div>오류가 발생했습니다: {error}</div>;
  }

  // 상세 데이터 렌더링
  return (
    <>
      <div className={styles.article}>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.infoBox}>
          <div className={styles.user}>
            <img
              src="/user_profile.png"
              alt="user_profile"
              className={styles.userImg}
            />
            <div>총명한판다</div>
            <div>2024.04.16</div>
          </div>
          <div className={styles.likeBox}>
            <img src="/ic_heart.png" alt="like" className={styles.likeImg} />
            <div>{article.likes}</div>
          </div>
        </div>
        <span
          className={styles.optionButton}
          onClick={onMenuToggle} // 메뉴 토글
        ></span>
        {isMenuOpen && (
          <>
            <div className={styles.overlay} onClick={handleCloseMenu}></div>
            <div className={styles.menu}>
              <p onClick={handleEdit}>수정하기</p>
              <p onClick={handleDelete}>삭제하기</p>
            </div>
          </>
        )}
      </div>
      <div className={styles.content}>{article.content}</div>
      {/* CommentList 컴포넌트 */}
      <CommentList articleId={article.id} />
      <div className={styles.return} onClick={() => router.push("/community")}>
        목록으로 돌아가기
      </div>
    </>
  );
}
