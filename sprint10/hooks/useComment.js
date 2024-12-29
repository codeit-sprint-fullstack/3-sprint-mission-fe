import { useState, useEffect, useCallback } from "react";
import { deleteComment, getComments, postComment } from "@/lib/pandaMarketApiService";

function useComment(articleId) {
  const [comments, setComments] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");
  
  // Load comments
  const handleLoadComments = useCallback(async () => {
    try {
      const commentsList = await getComments(articleId);
      setComments(commentsList.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, [articleId]);

  // Delete a comment
  const handleDeleteComment = useCallback(async (commentId) => {
    await deleteComment(commentId);
    await handleLoadComments();
  }, [handleLoadComments]);


  // Load comments
  useEffect(() => {

    handleLoadComments();
  }, [handleLoadComments]);


  // Post a comment
  const handlePostComment = async (e) => {
    if (textareaValue === "") return;
    await postComment(articleId, textareaValue);
    setTextareaValue('');
    handleLoadComments();
  }

  return { comments, handleDeleteComment, handlePostComment, setTextareaValue, textareaValue };
}

export default useComment;
