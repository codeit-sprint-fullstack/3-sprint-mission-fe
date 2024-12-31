import { useRouter } from "next/router";
import styles from "./InputComment.module.css";

export default function InputComment({
  handleClick,
  value,
  setValue,
  isSubmitting,
  isArticle,
}) {
  const isBtDisabled = !value.trim();

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <div className={styles.mediumText}>
          {isArticle ? "댓글달기" : "문의하기"}
        </div>
        <textarea
          className={styles.textArea}
          placeholder={
            isArticle
              ? "댓글 입력해주세요"
              : "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles.registerBtBox}>
          <button
            disabled={isBtDisabled}
            className={styles.registerBt}
            onClick={handleClick}
          >
            {isSubmitting ? "등록 중.." : "등록"}
          </button>
        </div>
      </div>
    </div>
  );
}
