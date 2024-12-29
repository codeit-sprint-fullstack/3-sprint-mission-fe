import { useEffect, useState } from "react";
import styles from "@/styles/components/shared/CommentAndQuestionInput.module.css";

function CommentAndQuestionInput({
  type,
  submitHandler,
  setTextareaValue,
  textareaValue
}) {

  const [title, setTitle] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    switch (type) {
      case 'comment':
        setTitle('댓글달기');
        setPlaceholder('댓글을 입력해주세요.');
        break;
      case 'question':
        setTitle('문의하기');
        setPlaceholder('개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.');
        break;
    }
  }, [type]);

  return (
    <div className={styles.inputBox}>
      <h2 className={styles.inputTitle}>{title}</h2>
      <textarea
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        className={styles.textareaContent}
        placeholder={placeholder}
        id="message"
        name="message"
        rows="4"
        cols="50" />
      <div className={styles.buttonBox}>
        <button
          onClick={submitHandler}
          className={`
          ${styles.postButton}
          ${textareaValue ? styles.postButtonActive : ''}
          `}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default CommentAndQuestionInput;