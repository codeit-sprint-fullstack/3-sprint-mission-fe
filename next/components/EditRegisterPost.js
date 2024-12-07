import styles from "@/components/registerPost.module.css";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function RegisterOrEdit() {
  const router = useRouter();
  const { id } = router.query; // URL에서 게시물 ID 추출
  const isEditMode = Boolean(id); // 수정 모드 여부 확인

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isButtonDisabled = !title || !content;

  // 수정 모드일 때 게시물 데이터 불러오기
  useEffect(() => {
    if (isEditMode) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`/posts/${id}`);
          if (response.status === 200) {
            setTitle(response.data.title);
            setContent(response.data.content);
          } else {
            alert("게시물을 불러오지 못했습니다.");
          }
        } catch (error) {
          console.error("Failed to fetch post:", error);
          alert("게시물 데이터를 가져오는 중 오류가 발생했습니다.");
        }
      };
      fetchPost();
    }
  }, [id, isEditMode]);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      if (isEditMode) {
        // 수정 API 호출
        const response = await axios.patch(
          `/board/${id}`,
          { title, content },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          alert("게시물이 수정되었습니다!");
          router.push(`/board/${id}`); // 수정 후 게시물 상세 페이지로 이동
        } else {
          alert(`오류 발생: ${response.data.error || "알 수 없는 오류"}`);
        }
      } else {
        // 등록 API 호출
        const response = await axios.post(
          "/board",
          { title, content },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          alert("게시글이 등록되었습니다!");
          router.push(`/posts/${response.data.id}`); // 등록 후 게시물 상세 페이지로 이동
        } else {
          alert(`오류 발생: ${response.data.error || "알 수 없는 오류"}`);
        }
      }
    } catch (error) {
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
        <h1 className={styles.write}>{isEditMode ? "게시글 수정" : "게시글 쓰기"}</h1>
        <button
          className={styles.registerBtn}
          type="submit"
          onClick={handleSubmit}
          disabled={isButtonDisabled || isSubmitting}
        >
          {isEditMode ? "수정" : "등록"}
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
            type="text"
            placeholder="내용을 입력해주세요"
            className={styles.contentInput}
          />
        </div>
      </form>
    </div>
  );
}
