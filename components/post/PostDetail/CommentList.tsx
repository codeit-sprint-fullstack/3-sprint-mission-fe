import { useRef, useState } from "react";
import Image from "next/image";
import kebabIcon from "@/public/icons/ic_kebab.png";
import profileImage from "@/public/icons/ic_profile.png";
import PostAndCommentActionsDropdown from "@/components/common/dropdown/PostAndCommentActionsDropdown";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "@/services/commentApi";
import { CommentListResponse, Comment } from "@/types/comments";
import { useAuthStore } from "@/store/useAuthStore";

type CommentListProps = {
  id: string;
};

const CommentList = ({ id }: CommentListProps) => {
  const { userInfo } = useAuthStore();

  const {
    data: commentsData,
    isLoading,
    isError,
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

  if (isLoading) return <div>로딩 중...</div>;
  if (isError)
    return (
      <div>
        에러가 발생했습니다:{" "}
        {error instanceof Error ? error.message : "알 수 없는 에러"}
      </div>
    );
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
                    <PostAndCommentActionsDropdown />
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

export default CommentList;
