import { useRef, useState } from "react";
import Image from "next/image";
import kebabIcon from "@/public/icons/ic_kebab.png";
import profileImage from "@/public/icons/ic_profile.png";
import PostAndCommentActionsDropdown from "@/components/common/dropdown/PostAndCommentActionsDropdown";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteComment, getComments } from "@/services/commentApi";
import { CommentListResponse, Comment } from "@/types/comments";
import { useAuthStore } from "@/store/useAuthStore";
import LoadingSpinner from "@/components/common/loading/LoadingSpinner";

type CommentListProps = {
  id: string | number;
};

const PrevCommentList = ({ id }: CommentListProps) => {
  const { userInfo } = useAuthStore();

  const {
    data: commentsData,
    isLoading,
    error,
  } = useQuery<CommentListResponse>({
    queryKey: ["comments", id],
    queryFn: () => getComments(Number(id), 10, 0),
  });

  // 각 댓글 내용 상태 관리
  const [commentContents, setCommentContents] = useState<{
    [key: string]: string;
  }>({});

  // 각 댓글의 케밥 버튼 상태 관리
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});

  // 댓글별 텍스트 영역 참조
  const textareaRefs = useRef<{ [key: string]: HTMLTextAreaElement | null }>(
    {},
  );

  const handleInputChange = (id: number, value: string) => {
    setCommentContents((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const toggleKebabMenu = (id: number) => {
    setDropdownStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const queryClient = useQueryClient();
  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment(commentId); // 댓글 삭제 API 호출
      queryClient.invalidateQueries({ queryKey: ["comments", String(id)] }); // 댓글 목록 새로고침
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>댓글을 불러오지 못했습니다. 다시 시도해주세요.</div>;
  if (!commentsData || !commentsData.list.length)
    return <div>댓글이 없습니다.</div>;

  return (
    <ul className="mb-16 w-full">
      {commentsData.list.map((comment: Comment) => (
        <li
          key={comment.id}
          className="mb-5 flex w-full flex-col border-b-[1px] bg-gray-bg_list pb-3"
        >
          <div className="flex items-start justify-between">
            {/* 댓글 입력창 */}
            <textarea
              ref={(el) => {
                textareaRefs.current[comment.id] = el;
              }}
              className="mb-6 w-full resize-none rounded-xl bg-gray-bg_list"
              placeholder="댓글을 입력해주세요"
              value={commentContents[comment.id] || comment.content}
              onChange={(e) => handleInputChange(comment.id, e.target.value)}
              onInput={() => {
                const textarea = textareaRefs.current[comment.id];
                if (textarea) {
                  textarea.style.height = "auto";
                  textarea.style.height = `${textarea.scrollHeight}px`;
                }
              }}
            />
            {/* 케밥 버튼 */}
            {/* 로그인한 사용자와 댓글 작성자가 일치할 때만 보이게 */}
            {userInfo?.id === comment.writer.id && (
              <button
                onClick={() => toggleKebabMenu(comment.id)}
                className="relative"
              >
                <Image src={kebabIcon} alt="더보기" width={24} height={24} />
                {dropdownStates[comment.id] && (
                  <div className="absolute right-0 top-6 z-10">
                    <PostAndCommentActionsDropdown
                      type="comment"
                      id={comment.id}
                      onDelete={() => handleDeleteComment(comment.id)}
                    />
                  </div>
                )}
              </button>
            )}
          </div>
          {/* 댓글 하단 정보 */}
          <div className="flex items-center gap-2">
            <Image
              src={comment.writer.image || profileImage}
              alt="프로필 이미지"
              width={32}
              height={32}
            />
            <div className="flex flex-col gap-1 text-xs">
              <span>{comment.writer.nickname}</span>
              <span className="text-gray">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PrevCommentList;
