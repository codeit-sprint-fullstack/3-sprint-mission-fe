import { useState } from "react";
import CommonBtn from "@/components/common/button/CommonBtn";
import { createComment } from "@/services/commentApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type CommentInputProps = {
  title: string;
  placeholder: string;
  productId: string | number;
};

const CommentInput = ({ title, placeholder, productId }: CommentInputProps) => {
  const [commentContent, setCommentContent] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (content: string) => createComment(Number(productId), content),
    onSuccess: () => {
      // 댓글 등록 성공 시, 해당 제품의 댓글 리스트를 다시 불러옴
      queryClient.invalidateQueries({
        queryKey: ["comments", String(productId)],
      });
      setCommentContent(""); // 입력 필드 초기화
    },
    onError: (error) => {
      console.error("댓글 등록 실패:", error);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentContent.trim() === "") return;
    mutation.mutate(commentContent);
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
