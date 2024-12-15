import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/createArticle.module.css";
import { useState } from "react";
import axios from "@/lib/axios";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isBtDisabled = !title.trim() || !content.trim();

  async function createArticle() {
    try {
      setIsSubmitting(true);
      const response = await axios.post(`/article`, {
        title: title,
        content: content,
      });
      console.log(response.data);
      alert("게시글이 등록되었습니다!");
      window.location.href = "/"; // 성공 시 메인 페이지로 이동
    } catch (err) {
      console.log(err);
      alert("게시글 등록에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleClick = () => {
    createArticle();
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.title}>
            <div className={styles.bigText}>게시글 쓰기</div>
            <button
              disabled={isBtDisabled}
              className={styles.registerBt}
              onClick={handleClick}
            >
              {isSubmitting ? "등록 중..." : "등록"}
            </button>
          </div>
          <div className={styles.inputBox}>
            <div className={styles.mediumText}>*제목</div>
            <input
              className={styles.inputTitle}
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className={styles.mediumText}>*내용</div>
            <textarea
              className={styles.textarea}
              placeholder="내용을 입력해주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
