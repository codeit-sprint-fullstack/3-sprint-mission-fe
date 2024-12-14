import { useState, useEffect, useCallback } from "react";
import { deleteComment, getComments, postComment } from "@/lib/pandaMarketApiService";

export default function useComment(articleId) {
  const [comments, setComments] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");

  const handleLoadComments = useCallback(async () => {
    try {
      const commentsList = await getComments(articleId);
      setComments(commentsList.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, [articleId]);

  const handleDeleteComment = useCallback(async (commentId) => {
    const response = await deleteComment(commentId);
    await handleLoadComments();
  }, [handleLoadComments]);

  useEffect(() => {

    handleLoadComments();
  }, [handleLoadComments]);

const handlePostComment = async (e) => {
  if(textareaValue === "") return;
  const response = await postComment(articleId, textareaValue);
  console.log("response : ", response);
  setTextareaValue('');
  handleLoadComments();
}

  return { comments, handleDeleteComment, handlePostComment, setTextareaValue, textareaValue };
}
