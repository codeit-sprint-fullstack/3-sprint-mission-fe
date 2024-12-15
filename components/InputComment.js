import styles from "./InputComment.module.css";

export default function InputComment({
  handleClick,
  value,
  setValue,
  isSubmitting,
}) {
  const isBtDisabled = !value.trim();

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <div className={styles.mediumText}>댓글달기</div>
        <textarea
          className={styles.textArea}
          placeholder="댓글 입력해주세요"
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
