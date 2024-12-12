import styles from '@/components/comment.module.css';
import axios from "@/lib/axios";
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Comment() {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // 수정: 초기값 false
  const router = useRouter();
  const id = router.query['id'];

  const isButtonDisabled = !content;

  const handleSubmit = async (targetId) => {
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`/board/${targetId}/comments`, {
        content,
      });

      console.log(response);
      if (response.status === 201) {
        alert('댓글이 등록되었습니다!');
        setContent('');
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
        placeholder='댓글을 입력해주세요.' 
        className={styles.enterComment} 
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className={styles.btnWrapper}>
        <button 
          className={styles.commentBtn}
          type='submit'
          onClick={() => handleSubmit(id)} // 수정: 화살표 함수 사용
          disabled={isButtonDisabled || isSubmitting}
        >
          등록
        </button>
      </div>
    </div>
  );
}