import styles from '@/components/post/comment.module.css';
import axios from "@/lib/axios";
import { useRouter } from 'next/router';
import { useState, useEffect, ChangeEvent } from 'react';

function Comment ()  {
  const [content, setContent] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      setId(Number(router.query.id));
    }
  }, [router.query]);

  const isButtonDisabled = !content || isSubmitting;

  const handleSubmit = async () => {
    if (!id) {
      alert('게시글 ID를 찾을 수 없습니다.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(`/articles/${id}/comments`, {
        content,
      });

      if (response.status === 200 || response.status === 201) {
        alert('댓글 작성 성공!');
        setContent('');
      }
    } catch (error) {
      alert('댓글 작성에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.commentContainer}>
      <textarea
        value={content}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        placeholder="댓글을 입력하세요"
        className={styles.textarea}
      />
      <button
        onClick={handleSubmit}
        disabled={isButtonDisabled}
        className={styles.submitButton}
      >
        댓글 작성
      </button>
    </div>
  );
};

export default Comment;
