import { useState } from "react";
import { useRouter } from "next/router"; // Router import
import { articleAPI } from "@/lib/axios"; // API import
import styles from "./write.module.css";

function Write() {
  const router = useRouter(); // Router instance
  const [title, setTitle] = useState(""); // 제목 상태
  const [content, setContent] = useState(""); // 내용 상태
  const [isSubmitting, setIsSubmitting] = useState(false); // 등록 중 상태

  const isButtonEnabled = title.trim() !== "" && content.trim() !== ""; // 버튼 활성화 조건

  const handleSubmit = async () => {
    if (!isButtonEnabled || isSubmitting) return; // 비활성화 상태일 때 막기
    setIsSubmitting(true); // 등록 중으로 변경

    try {
      // API 요청
      await articleAPI.createArticle({
        title,
        content,
      });
      alert("게시글이 성공적으로 등록되었습니다!");
      router.push("/community"); // 등록 후 community 페이지로 이동
    } catch (error) {
      console.error("등록 실패:", error);
      // alert("게시글 등록에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false); // 등록 중 상태 해제
    }
  };

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.title}>게시글 쓰기</div>
        <div
          className={`${styles.write} ${
            !isButtonEnabled || isSubmitting ? styles.disabled : ""
          }`}
          onClick={handleSubmit}
        >
          등록
        </div>
      </div>
      <div className={styles.subTitle}>제목</div>
      <input
        type="text"
        className={styles.input}
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // 제목 입력
      />
      <div className={styles.subTitle}>내용</div>
      <textarea
        className={`${styles.input} ${styles.description}`}
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)} // 내용 입력
      />
    </>
  );
}

export default Write;
