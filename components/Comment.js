import styles from "./Comment.module.css";
import InputComment from "./InputComment";
import CommentList from "./CommentList";
import NoComment from "./NoComment";
import { useState, useEffect } from "react";
import axios from "@/lib/axios";

export default function Comment({ id }) {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function getComments() {
    const response = await axios.get(`/article/${id}/comments`);
    const comments = response.data ?? [];
    setComments(comments);
    return response.data;
  }

  useEffect(() => {
    // url id 값이 오기 전에 실행되는 것을 막음 이거 안하면 id 가 undefined가 돼서 아무거나 불러와짐
    if (id) {
      getComments();
    }
  }, [id]);

  async function createComment() {
    try {
      setIsSubmitting(true);
      const response = await axios.post(`/article/${id}/comment`, {
        content: value,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleClick = async () => {
    await createComment();
    await getComments();
    setValue("");
  };

  return (
    <div className={styles.commentContainer}>
      <InputComment
        id={id}
        handleClick={handleClick}
        value={value}
        setValue={setValue}
        getComments={getComments}
        isSubmitting={isSubmitting}
      />
      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <NoComment />
      )}
    </div>
  );
}
