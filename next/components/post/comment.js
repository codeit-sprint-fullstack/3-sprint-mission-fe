import styles from '@/components/post/comment.module.css';
import axios from "@/lib/axios";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Comment() {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [id, setId] = useState(null);
  const router = useRouter();

  // useEffect로 id 값을 안정적으로 가져오기
  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id);
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
        alert('댓글이 등록되었습니다!');
        setContent(''); // 입력 필드 초기화
      } else {
        alert(`오류 발생: ${response.data.error || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.log('Server response:', error.response); // 서버 응답 출력
        alert(`오류 발생: ${error.response.data.error || '서버에서 문제가 발생했습니다.'}`);
      } else {
        alert('서버 요청 중 알 수 없는 오류가 발생했습니다.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.commentWrapper}>
      <h1 className={styles.postComment}>댓글 달기</h1>
      <textarea 
        placeholder="댓글을 입력해주세요." 
        className={styles.enterComment} 
        value={content} // textarea에 현재 상태 반영
        onChange={(e) => setContent(e.target.value)} // 상태 업데이트
      />
      <div className={styles.btnWrapper}>
        <button 
          className={styles.commentBtn}
          type="submit"
          onClick={handleSubmit} // 직접 함수 참조
          disabled={isButtonDisabled} // 비활성화 조건
        >
          {isSubmitting ? '등록 중...' : '등록'}
        </button>
      </div>
    </div>
  );
}
