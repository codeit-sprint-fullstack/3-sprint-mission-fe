import styles from "@/components/Product/AskInput.module.css";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AskInput() {
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const id = router.query['id'] as string | undefined;

  const isButtonDisabled = !comment;

  const handleSubmit = async (targetId: string | undefined) => {
    if (!targetId) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(`/products/${targetId}/comments`, {
        content: comment,
      });

      console.log(response);
      if (response.status === 200) {
        alert('댓글이 등록되었습니다!');
        setComment('');
      } else {
        alert(`오류 발생: ${response.data.error || '알 수 없는 오류'}`);
      }
    } catch (error: any) {
      console.error('Error:', error);
      if (error.response) {
        alert(`오류 발생: ${error.response.data.error || '서버에서 문제가 발생했습니다.'}`);
      } else {
        alert('서버 요청 중 알 수 없는 오류가 발생했습니다.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.askWrapper}>
      <div>
        <span className={styles.ask}>문의하기</span>
      </div>
      <div>
        <textarea
          className={styles.askInput}
          onChange={(e) => setComment(e.target.value)}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
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
  );
}
