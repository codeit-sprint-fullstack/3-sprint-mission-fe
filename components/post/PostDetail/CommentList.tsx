import { useRef, useState } from "react";
import Image from "next/image";

import kebabIcon from "@/public/icons/ic_kebab.png";
import profileImage from "@/public/icons/ic_profile.png";
import PostAndCommentActionsDropdown from "@/components/common/dropdown/PostAndCommentActionsDropdown";

const comments = [
  { id: "1", content: "혹시 사용기간이 어떻게 되실까요?" },
  { id: "2", content: "배터리 사이클 정보도 알 수 있을까요?" },
  { id: "3", content: "구매 시기를 알 수 있을까요?" },
];

const CommentList = () => {
  // 각 댓글 내용 상태 관리
  const [commentContents, setCommentContents] = useState(
    comments.reduce(
      (acc, comment) => {
        acc[comment.id] = comment.content;
        return acc;
      },
      {} as { [key: string]: string },
    ),
  );

  // 각 댓글의 케밥 버튼 상태 관리
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>(
    comments.reduce(
      (acc, comment) => {
        acc[comment.id] = false;
        return acc;
      },
      {} as { [key: string]: boolean },
    ),
  );

  // 댓글별 텍스트 영역 참조
  const textareaRefs = useRef<{ [key: string]: HTMLTextAreaElement | null }>(
    {},
  );

  const handleInputChange = (id: string, value: string) => {
    setCommentContents((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const toggleKebabMenu = (id: string) => {
    setDropdownStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ul className="mb-16 w-full">
      {comments.map((comment) => (
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
              value={commentContents[comment.id]}
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
          </div>
          {/* 댓글 하단 정보 */}
          <div className="flex items-center gap-2">
            <Image
              src={profileImage}
              alt="프로필 이미지"
              width={32}
              height={32}
            />
            <div className="flex flex-col gap-1 text-xs">
              <span>똑똑한판다</span>
              <span className="text-gray">1시간 전</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
