import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { articleAPI } from "@/lib/axios";
import { getFormattedDate } from "@/lib/dateUtils";
import CommentList from "@/components/CommentList";
import styles from "./index.module.css";

export default function ArticleDetail() {
  const [article, setArticle] = useState(null); // 기사 데이터 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const [isAuthor, setIsAuthor] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const { id } = router.query; // URL에서 ID 가져오기

  // 데이터 로드
  useEffect(() => {
    if (!id) return; // ID가 없으면 아무 작업도 하지 않음

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await articleAPI.getArticleById(id);

        // JWT에서 userId 추출
        const token = localStorage.getItem("accessToken");
        const payload = JSON.parse(atob(token.split(".")[1])); // JWT 디코딩
        const loggedInUserId = payload.id;

        // 작성자 여부 확인
        setIsAuthor(response.data.writer.id === loggedInUserId);

        setArticle(response.data); // 데이터 설정
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // 메뉴 토글
  const onMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleEdit = () => {
    router.push(`/article/${article.id}/edit`); // 수정 페이지로 이동
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
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  // 에러 처리
  if (error) {
    return <div>오류가 발생했습니다: {error}</div>;
  }

  // 데이터가 없는 경우
  if (!article) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  const formattedDate = getFormattedDate(article.createdAt);

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
            <div>{article.writer.nickname}</div>
            <div>{formattedDate}</div>
          </div>
          <div className={styles.likeBox}>
            <img src="/ic_heart.png" alt="like" className={styles.likeImg} />
            <div>{article.likeCount}</div>
          </div>
        </div>

        {/* 작성자인 경우에만 optionButton 표시 */}
        {isAuthor && (
          <span
            className={styles.optionButton}
            onClick={onMenuToggle} // 메뉴 토글
          ></span>
        )}

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
