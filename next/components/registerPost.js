import styles from "@/components/registerPost.module.css";
import axios from '@/lib/axios';
import { useState } from "react";

export default function Register() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isButtonDisabled = !title || !content;

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await axios.post('/board', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('게시글이 등록되었습니다!');
        setTitle('');
        setContent('');
      } else {
        const errorData = await response.json();
        alert(`오류 발생: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버 요청 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.writeWrapper}>
        <h1 className={styles.write}>게시글 쓰기</h1>
        <button 
        className={styles.registerBtn} 
        type="submit"
        onClick={handleSubmit}
        disabled={isButtonDisabled || isSubmitting}
        >
          등록
        </button>
      </div>
      <form>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>*제목</h1>
          <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="제목을 입력해주세요" 
          className={styles.titleInput}
          />
        </div>
        <div className={styles.contentWrapper}>
          <h1 className={styles.content}>*내용</h1>
          <textarea
           value={content}
           onChange={(e) => setContent(e.target.value)} 
          type="text"
          placeholder="내용을 입력해주세요"
          className={styles.contentInput}
          />
        </div>
      </form>
    </div>
  )
}