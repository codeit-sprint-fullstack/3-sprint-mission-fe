import styles from "./CommentList.module.css";
import CommentLayout from "./CommentLayout";

export default function CommentList({ comments }) {
  return (
    <div className={styles.commentList}>
      {comments.map((comment) => (
        <CommentLayout key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
