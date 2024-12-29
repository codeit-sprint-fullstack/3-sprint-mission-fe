import { useCallback, useEffect, useState } from "react";
import { deleteQuestion, getQuestions, postQuestion } from "@/lib/newPandaMarketApi";

function useQuestion(productId) {
  const [questions, setQuestions] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');
  
  // Load questions
  const handleLoadQuestion = useCallback(async () => {
    try {
      if (!productId) return;
      const data = getQuestions(productId)
      return data;
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  }, [productId]);

  // Delete a question
  const handleDeleteQuestion = useCallback(async (questionId) => {
    try {
      await deleteQuestion(questionId);
      await handleLoadQuestion();
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  }, [handleLoadQuestion, productId]);


  // Load questions
  useEffect(() => {
    handleLoadQuestion();
  }, [handleLoadQuestion]);

  // Post a question
  const handlePostQuestion = async () => {
    if (textareaValue === "") return;
    try {
      await postQuestion(productId, {
        content: textareaValue,
      })
      setTextareaValue('');
      handleLoadQuestion();
    } catch (error) {
      console.error("Error posting question:", error);
    }
  }

  return {
    questions,
    handleDeleteQuestion,
    handlePostQuestion,
    textareaValue,
    setTextareaValue,
  };
}

export default useQuestion;
