import styles from '@/components/comment.module.css';
import axios from "@/lib/axios";
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Comment() {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState('');
  const router = useRouter();
  const id = router.query['id'];

  const isButtonDisabled = !content;

  const handleSubmit = async (targetId) => {
    setIsSubmitting(true);

    try{
      const response = await axios.post(`/board/${targetId}/comments`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({content}),
      });

      if (response.ok){
        const data = await response.json();
        alert('댓글이 등록되었습니다!');
        setContent('');
      }else{
        const errorData= await response.json();
        alert(`오류 발생: ${errorData.error}`);
      }
    }catch(error){
      console.error('Error:', error);
      alert('서버 요청 중 오류가 발생했습니다.');
    }finally {
      setIsSubmitting(false);
    }
  };

  return(
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
        onClick={handleSubmit}
        disabled={isButtonDisabled || isSubmitting}
        >등록</button>
      </div>
    </div>
  )
}

