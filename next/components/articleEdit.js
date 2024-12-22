import { useState } from "react";
import styles from "@/components/registerPost.module.css"

export default function ArticleEditForm({ post, onUpdate, onCancel }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(post.id, { title, content }); // 수정 요청
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          제목:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          내용:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" className={styles.registerBtn }>수정 완료</button>
      <button type="button" onClick={onCancel}>
        취소
      </button>
    </form>
  );
}
