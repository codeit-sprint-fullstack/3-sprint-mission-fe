"use client";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  axiosCreateProductComment,
  axiosDeleteProductComment,
  axiosProductComments,
} from "@/src/utils/axios";
import Image from "next/image";
import Link from "next/link";

interface ProductCommentProps {
  productId: string;
}

interface Comment {
  id: string;
  content: string;
  user: { nickname: string };
  createdAt: string;
}

export default function ProductComment({ productId }: ProductCommentProps) {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const {
    data: comments = [],
    isLoading,
    isError,
  } = useQuery<Comment[], Error>({
    queryKey: ["product-comments", productId],
    queryFn: () => axiosProductComments(productId),
  });

  const mutation = useMutation<void, Error, string>({
    mutationFn: (newComment: string) =>
      axiosCreateProductComment(productId, newComment),
    onSuccess: () => {
      queryClient.invalidateQueries(["productComment", productId]);
      setComment("");
    },
    onError: (error) => {
      alert("댓글 등록에 실패했습니다. 로그인 상태를 확인해주세요.");
      console.error(error);
    },
  });

  const deleteCommentMutation = useMutation<void, Error, string>({
    mutationFn: (commentId: string) => axiosDeleteProductComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries(["product-comments", productId]);
      setOpenDropdownId(null);
    },
    onError: (error) => {
      alert("댓글 삭제에 실패했습니다.");
      console.error(error);
    },
  });

  const handleDropdownClick = (commentId: string) => {
    setOpenDropdownId((prev) => (prev === commentId ? null : commentId));
  };

  const handleDropdownAction = (action: string, commentId: string) => {
    if (action === "삭제") {
      if (window.confirm("정말 삭제하시겠습니까?")) {
        deleteCommentMutation.mutate(commentId);
      }
    } else if (action === "수정") {
      console.log("수정:", commentId);
    }
    setOpenDropdownId(null);
  };

  return (
    <div className="w-[1200px] mt-[40px]">
      <div className="text-[16px] font-semibold leading-[26px] text-left text-[#111827]">
        문의하기
      </div>

      <div>
        <input
          className="outline-none w-[1200px] h-[104px] p-[16px_24px] pb-[60px] rounded-[12px] bg-[#F3F4F6] mt-[8px] text-[16px] font-[400] leading-[26px] text-left text-[#9CA3AF]"
          placeholder="댓글을 입력하세요."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={() => mutation.mutate(comment)}
          disabled={!comment.trim()}
          className="flex justify-center items-center ml-[1120px] mt-[16px] w-[80px] h-[42px] px-[23px] py-[12px] rounded-[8px] bg-[#3692FF] text-[14px] font-semibold leading-[26px] text-left text-[#F3F4F6] disabled:opacity-50"
        >
          등록
        </button>
      </div>

      {isLoading && (
        <div className="text-gray-500 mt-4">댓글을 불러오는 중...</div>
      )}
      {isError && (
        <div className="text-red-500 mt-4">
          댓글을 불러오는 중 오류가 발생했습니다.
        </div>
      )}

      <div className="mt-[20px] max-h-[400px] overflow-y-auto">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c.id} className="p-3 border-b border-[#E5E7EB] relative">
              <Image
                src="/commentdropdownIcon.png"
                alt="commentdropdownIcon"
                className="absolute top-3 right-3 cursor-pointer"
                width={24}
                height={24}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDropdownClick(c.id);
                }}
              />

              {openDropdownId === c.id && (
                <div className="absolute right-3 top-10 w-[100px] bg-white rounded-md border border-[#D1D5DB] z-50">
                  <button
                    onClick={() => handleDropdownAction("수정", c.id)}
                    className="w-full px-4 py-2 text-[14px] text-center text-gray-700"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDropdownAction("삭제", c.id)}
                    className="w-full px-4 py-2 text-center text-[14px] text-red-500"
                  >
                    삭제
                  </button>
                </div>
              )}

              <div className="text-[14px] font-[600] leading-[24px] text-left text-[#1F2937]">
                {c.content}
              </div>
              <div className="flex flex-row mt-[24px]">
                <div className="w-[32px]">
                  <Image
                    src="/userImage.png"
                    alt="userImage"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="ml-[20px]">
                  <div className="text-[12px] font-normal leading-[18px] text-left text-[#4B5563]">
                    {c.user.nickname}
                  </div>
                  <div className="text-[12px] font-normal leading-[18px] text-left text-[#4B5563] mt-[10px]">
                    {new Date(c.createdAt).toLocaleDateString("ko-KR")}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center">
            <Link href="/market">
              <Image
                src="/nocomment-.png"
                alt="nocomment"
                className="cursor-pointer"
                width={240}
                height={326}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
