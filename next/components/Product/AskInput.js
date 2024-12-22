import styles from "@/components/Product/AskInput.module.css"
import axios from "@/lib/axios";
import { useRouter } from "next/router"
import { useState } from "react"

export default function AskInput() {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const id = router.query['id'];

  const isButtonDisabled = !comment;

  const handleSubmit = async (targetId) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post(`/products/${targetId}/comments`, {
        content,
      });

      console.log(response);
      if(response.status === 200){
        alert('댓글이 등록되었습니다!')
        setComment('')
      }else{
        alert(`오류 발생: ${response.data.error || '알 수 없는 오류'}`);
      }
  
    }catch (error) {
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

  return(
    <div className={styles.askWrapper}>
      <div>
        <span className={styles.ask}>문의하기</span>
      </div>
      <div>
        <textarea
          className={styles.askInput}
          type="text"
          onChange={(e) => setComment(e.target.value)}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 잇으며, 이에 대한 민형 사상 책임은 게시자에게 있습니다"/>
      </div>
      <div className={styles.btnWrapper}>
        <button 
          className={styles.commentBtn}
          type="submit"
          onClick={() => handleSubmit(id)}
          disabled={isButtonDisabled || isSubmitting}
          >
          등록
        </button>
      </div>
    </div>
  )
}