import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { articleAPI } from "@/lib/axios";
import styles from "./edit.module.css";

export default function ModifyArticle() {
  const [article, setArticle] = useState(null); // 기사 데이터 상태
  const [title, setTitle] = useState(""); // 제목 상태
  const [content, setContent] = useState(""); // 내용 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [isSubmitting, setIsSubmitting] = useState(false); // 제출 상태
  const [error, setError] = useState(null); // 에러 상태

  const router = useRouter();
  const { id } = router.query; // URL에서 ID 가져오기

  // 데이터 로드
  useEffect(() => {
    if (!id) return; // ID가 없으면 아무 작업도 하지 않음

    const fetchData = async () => {
      try {
        setIsLoading(true); // 로딩 시작
        const response = await articleAPI.getArticleById(id);

        // JWT에서 userId 추출
        const token = localStorage.getItem("accessToken");
        const payload = JSON.parse(atob(token.split(".")[1])); // JWT 디코딩
        const loggedInUserId = payload.id;

        // 작성자 확인
        if (response.data.writer.id !== loggedInUserId) {
          router.push("/404"); // 작성자가 아니면 404로 이동
          return;
        }

        setArticle(response.data); // 데이터 설정
        setTitle(response.data.title); // 제목 설정
        setContent(response.data.content); // 내용 설정
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("데이터를 불러오는 중 오류가 발생했습니다."); // 에러 설정
      } finally {
        setIsLoading(false); // 로딩 끝
      }
    };

    fetchData();
  }, [id]);

  const handleSave = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await articleAPI.modifyArticle(article.id, { title, content });
      alert("수정되었습니다.");
      router.push(`/article/${article.id}`); // 수정 후 상세 페이지로 이동
    } catch (error) {
      console.error("수정 실패:", error);
      alert("수정 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push(`/article/${article.id}`); // 상세 페이지로 이동
  };

  const isSaveDisabled =
    isSubmitting || title.trim() === "" || content.trim() === "";

  // 로딩 중 상태 처리
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  // 에러 처리
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.title}>게시글 수정</div>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            취소
          </button>
          <button
            className={`${styles.saveButton} ${
              isSaveDisabled ? styles.disabled : ""
            }`}
            onClick={handleSave}
            disabled={isSaveDisabled}
          >
            저장
          </button>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.subTitle}>제목</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          className={styles.input}
        />
        <div className={styles.subTitle}>내용</div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
          className={`${styles.input} ${styles.description}`}
        />
      </div>
    </>
  );
}
