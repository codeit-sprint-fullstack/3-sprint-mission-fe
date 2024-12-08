import { useState } from "react";
import { useRouter } from "next/router";
import { articleAPI } from "@/lib/axios";
import styles from "./edit.module.css";

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await articleAPI.getArticleById(id);
    if (!response.data) {
      return { notFound: true };
    }

    return {
      props: { article: response.data },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default function ModifyArticle({ article }) {
  const router = useRouter();
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await articleAPI.modifyArticle(article.id, { title, content });
      alert("수정되었습니다.");
      router.push(`/article/${article.id}`); // 수정 후 상세 페이지로 이동
    } catch (error) {
      console.error("수정 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push(`/article/${article.id}`); // 상세 페이지로 이동
  };

  const isSaveDisabled =
    isSubmitting || title.trim() === "" || content.trim() === "";

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
