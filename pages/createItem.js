import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/createArticle.module.css";
import { useState } from "react";

export default function CreateItem() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isBtDisabled = !title.trim() || !content.trim();
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.title}>
            <div className={styles.bigText}>상품 등록하기 </div>
            <button
              disabled={isBtDisabled}
              className={styles.registerBt}
            //   onClick={handleClick}
            >
              {isSubmitting ? "등록 중..." : "등록"}
            </button>
          </div>
          <div className={styles.inputBox}>
            <div className={styles.mediumText}>상품 이미지</div>
            <input
              className={styles.inputTitle}
              placeholder="+"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className={styles.mediumText}>상품명 </div>
            <input
              className={styles.inputTitle}
              placeholder="상품명을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className={styles.mediumText}>상품 소개 </div>
            <textarea
              className={styles.textarea}
              placeholder="상품 소개를 입력해주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className={styles.mediumText}>판매 가격 </div>
            <input
              className={styles.inputTitle}
              placeholder="판매 가격을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className={styles.mediumText}>태그 </div>
            <input
              className={styles.inputTitle}
              placeholder="태그를 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
