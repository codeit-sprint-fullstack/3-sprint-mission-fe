import { useState } from "react";
import CommonBtn from "@/components/common/button/CommonBtn";
import { createComment } from "@/services/commentApi";

type CommentInputProps = {
  title: string;
  placeholder: string;
  productId: number;
};

const CommentInput = ({ title, placeholder, productId }: CommentInputProps) => {
  const [commentContent, setCommentContent] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (commentContent.trim() === "") return;
    // 댓글 등록 API 호출

    try {
      await createComment(productId, commentContent);
      setCommentContent("");
    } catch (error) {
      console.error("댓글 등록 실패:", error);
    }

    // 댓글 등록 후 내용 초기화
  };

  return (
    <div className="mb-10">
      {/* h1, h2, h3의 기준이 모호함 */}
      <h3 className="mb-2 font-semibold">{title}</h3>
      <textarea
        value={commentContent}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="mb-3 h-[100px] w-full resize-none rounded-xl bg-gray-light px-6 py-4"
      />
      <div className="flex justify-end">
        <CommonBtn
          disabled={commentContent.trim() === ""}
          onClick={handleCommentSubmit}
        >
          등록
        </CommonBtn>
      </div>
    </div>
  );
};

export default CommentInput;
