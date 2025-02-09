import styles from "@/components/WriteArticle/registerPost.module.css";
import axios from "@/lib/axios";
import { JSX, useState } from "react";

export default function Register(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const isButtonDisabled = !title || !content;

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await axios.post<{
        error: string; id: string 
}>(
        "/board",
        { title, content },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response);

      if (response.status === 201) {
        alert("게시글이 등록되었습니다!");
        setTitle("");
        setContent("");
      } else {
        alert(`오류 발생: ${response.data.error || "알 수 없는 오류"}`);
      }
    } catch (error: any) {
      if (error.response) {
        console.error("Server Error:", error.response.status, error.response.data);
        alert(`오류 발생: ${error.response.data.message || "서버 오류가 발생했습니다."}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("서버가 응답하지 않습니다. 네트워크 상태를 확인하세요.");
      } else {
        console.error("Request Error:", error.message);
        alert("요청 처리 중 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.writeWrapper}>
        <h1 className={styles.write}>게시글 쓰기</h1>
        <button
          className={styles.registerBtn}
          type="button"
          onClick={handleSubmit}
          disabled={isButtonDisabled || isSubmitting}
        >
          등록
        </button>
      </div>
      <form>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>*제목</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
            className={styles.titleInput}
          />
        </div>
        <div className={styles.contentWrapper}>
          <h1 className={styles.content}>*내용</h1>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
            className={styles.contentInput}
          />
        </div>
      </form>
    </div>
  );
}
