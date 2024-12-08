import { useRef, useState } from "react";

import Image from "next/image";

import kebabIcon from "@/public/icons/ic_kebab.png";
import profileImage from "@/public/icons/ic_profile.png";

const comment_content2 = `
  혹시 사용기간이 어떻게 되실까요?ㅁㄴㅇㅁ

ㅁㄴㅇㅁㄴㅇㅁㄴㅁㄴㅇㅁㄴㅇ
ㅁㄴㅇㅁㄴㅇㅁ
ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
ㅁ`;

const CommentList = () => {
  const [commentContent, setCommentContent] = useState(comment_content2);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      // 높이 초기화 후 다시 계산
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    setCommentContent(e.target.value);
  };
  return (
    <ul className="mb-16 w-full">
      <li className="flex w-full flex-col border-b-[1px] pb-3">
        <div className="flex items-start justify-between">
          <textarea
            ref={textareaRef}
            className="w-full resize-none rounded-xl bg-gray-bg_list"
            placeholder="댓글을 입력해주세요"
            value={commentContent}
            onChange={handleInputChange}
          />
          <button>
            <Image src={kebabIcon} alt="더보기" width={24} height={24} />
          </button>
        </div>
        {/* 댓글 내용 하단 */}
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
    </ul>
  );
};

export default CommentList;
