import { useState } from "react";
import CommonBtn from "@/components/common/button/CommonBtn";

const CommentInput = () => {
  const [commentContent, setCommentContent] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  const handleCommentSubmit = () => {
    // 댓글 등록 API 호출

    // 댓글 등록 후 내용 초기화
    setCommentContent("");
  };

  return (
    <div className="mb-10">
      <h3 className="mb-2 font-semibold">댓글달기</h3>
      <textarea
        value={commentContent}
        onChange={handleInputChange}
        placeholder="댓글을 입력해주세요."
        className="mb-3 h-[100px] w-full resize-none rounded-xl bg-gray-light px-6 py-4"
      />
      <div className="flex justify-end">
        <CommonBtn
          disabled={commentContent.trim() === ""}
          onClick={handleCommentSubmit}
        >
          등록
        </CommonBtn>{" "}
      </div>
    </div>
  );
};

export default CommentInput;
