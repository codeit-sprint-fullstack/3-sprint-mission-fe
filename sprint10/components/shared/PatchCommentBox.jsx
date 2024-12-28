import styles from "@/styles/components/shared/PatchCommentBox.module.css";
import { useState } from "react";

function PatchCommentBox({
  textareaValue,
  setTextareaValue,
  submitHandler,
  setPatchComment }) {
  const [commentValue, setCommentValue] = useState(textareaValue);

  return (
    <div className={styles.patchCommentBox}>
      <textarea
        className={styles.patchCommentInput}
        value={commentValue}
        onChange={
          (e) => (
            setCommentValue(e.target.value)
          )
        }
      />
      <div className={styles.patchCommentBouttonBox}>
        <button
          onClick={() => setPatchComment(false)}
          className={styles.patchCancelButton}>
          취소
        </button>
        <button
          className={styles.patchSubmitButton}
          onClick={submitHandler}
        >
          수정 완료
        </button>
      </div>
    </div>
  );
}

export default PatchCommentBox;