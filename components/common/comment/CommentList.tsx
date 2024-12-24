import { useRef, useState } from "react";
import Image from "next/image";
import kebabIcon from "@/public/icons/ic_kebab.png";
import profileImage from "@/public/icons/ic_profile.png";
import PostAndCommentActionsDropdown from "@/components/common/dropdown/PostAndCommentActionsDropdown";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  deleteComment,
  getComments,
  updateComment,
} from "@/services/commentApi";
import { CommentListResponse, Comment } from "@/types/comments";
import { useAuthStore } from "@/store/useAuthStore";
import LoadingSpinner from "@/components/common/loading/LoadingSpinner";
import CommonBtn from "@/components/common/button/CommonBtn";

type CommentListProps = {
  id: string | number;
};

const CommentList = ({ id }: CommentListProps) => {
  const { userInfo } = useAuthStore();
  const queryClient = useQueryClient();

  // 수정 모드 상태 추가
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState<string>("");

  const {
    data: commentsData,
    isLoading,
    error,
  } = useQuery<CommentListResponse>({
    queryKey: ["comments", id],
    queryFn: () => getComments(Number(id), 10, 0),
    staleTime: 1000 * 60 * 5,
  });

  // 수정 mutation 추가
  const updateMutation = useMutation({
    mutationFn: ({
      commentId,
      content,
    }: {
      commentId: number;
      content: string;
    }) => updateComment(commentId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", String(id)] });
      setEditingCommentId(null);
      setEditContent("");
    },
  });

  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});

  const textareaRefs = useRef<{ [key: string]: HTMLTextAreaElement | null }>(
    {},
  );

  const toggleKebabMenu = (id: number) => {
    setDropdownStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment(commentId);
      queryClient.invalidateQueries({ queryKey: ["comments", String(id)] });
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
    }
  };

  // 수정 모드 시작
  const startEditing = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setEditContent(comment.content);
    setDropdownStates((prev) => ({ ...prev, [comment.id]: false }));
  };

  // 수정 취소
  const cancelEditing = () => {
    setEditingCommentId(null);
    setEditContent("");
  };

  // 수정 완료
  const handleUpdateComment = () => {
    if (editingCommentId && editContent.trim()) {
      updateMutation.mutate({
        commentId: editingCommentId,
        content: editContent,
      });
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
            {editingCommentId === comment.id ? (
              // 수정 모드 UI
              <div className="w-full">
                <textarea
                  ref={(el) => {
                    textareaRefs.current[comment.id] = el;
                  }}
                  className="mb-3 w-full resize-none rounded-xl bg-gray-light px-6 py-4"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  onInput={() => {
                    const textarea = textareaRefs.current[comment.id];
                    if (textarea) {
                      textarea.style.height = "auto";
                      textarea.style.height = `${textarea.scrollHeight}px`;
                    }
                  }}
                />
                <div className="flex justify-end gap-2">
                  <CommonBtn onClick={cancelEditing} variant="secondary">
                    취소
                  </CommonBtn>
                  <CommonBtn
                    onClick={handleUpdateComment}
                    disabled={!editContent.trim()}
                  >
                    수정
                  </CommonBtn>
                </div>
              </div>
            ) : (
              // 일반 모드 UI
              <>
                <div className="mb-6 w-full whitespace-pre-wrap break-all">
                  {comment.content}
                </div>
                {userInfo?.id === comment.writer.id && (
                  <button
                    onClick={() => toggleKebabMenu(comment.id)}
                    className="relative"
                  >
                    <Image
                      src={kebabIcon}
                      alt="더보기"
                      width={24}
                      height={24}
                    />
                    {dropdownStates[comment.id] && (
                      <div className="absolute right-0 top-6 z-10">
                        <PostAndCommentActionsDropdown
                          type="comment"
                          id={comment.id}
                          onDelete={() => handleDeleteComment(comment.id)}
                          onEdit={() => startEditing(comment)}
                        />
                      </div>
                    )}
                  </button>
                )}
              </>
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
