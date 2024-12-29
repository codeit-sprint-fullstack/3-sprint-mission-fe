import { useRouter } from 'next/router';
import styles from '@/styles/pages/ItemDetail.module.css';
import ItemDetailInfo from '@/components/ItemDetail/ItemDetailInfo';
import CommentAndQuestionInput from "@/components/shared/CommentAndQuestionInput";
import useQuestion from '@/hooks/useQuestion';
import Comments from '@/components/shared/Comments';
import BackToListButton from '@/components/shared/BackToListButton';
import NotFoundComment from '@/components/shared/NotFoundComment';

function ItemDetail() {
  const router = useRouter();
  const productId = router.query.id;

  const {
    questions,
    handleDeleteQuestion,
    handlePostQuestion,
    textareaValue,
    setTextareaValue } = useQuestion(productId) || [];

  if (!questions) return null;
  return (
    <div className={styles.itemDetailContainer}>

      <ItemDetailInfo productId={productId} />
      <CommentAndQuestionInput
        type='question'
        submitHandler={handlePostQuestion}
        setTextareaValue={setTextareaValue}
        textareaValue={textareaValue}
      />
      {questions.map((question, index) => (
        <Comments
          key={index}
          comment={question}
          handleDeleteComment={handleDeleteQuestion}
          setTextareaValue={setTextareaValue}
          submitHandler={handlePostQuestion}
        />
      ))}
      {questions.length ?
        null :
        <NotFoundComment type="question" />}

      <BackToListButton type="items" />
    </div>
  )
}

export default ItemDetail;
