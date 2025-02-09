"use client";

import { useState } from "react";
import { useAuthStore } from "@/src/store/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosCreateArticle } from "@/src/utils/axios";
import { useRouter } from "next/navigation";

export default function ArticleWrite() {
  const router = useRouter();
  const { userId } = useAuthStore();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationFn: () => axiosCreateArticle(userId!, title, content),
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
      alert("게시글이 등록되었습니다.");
      router.push("/border");
    },
    onError: (error: any) => {
      alert(error.response?.data?.message || "게시글 등록 실패");
    },
  });

  return (
    <div className="w-[1200px] mx-auto mt-[20px] mb-[150px]">
      <div className="flex flex-row justify-between">
        <div className="text-[20px] font-[700] leading-[32px] text-left text-[#1F2937]">
          게시글 쓰기
        </div>
        <button
          onClick={() => mutation.mutate()}
          disabled={!title.trim() || !content.trim()}
          className="cursor-pointer flex justify-center items-center w-[88px] h-[42px] px-[23px] py-[12px] rounded-[8px] bg-[#3692FF] text-[14px] font-semibold leading-[26px] text-left text-[#F3F4F6] disabled:bg-[#9CA3AF]"
        >
          등록
        </button>
      </div>

      <div className="mt-6">
        <div className="text-[18px] font-bold leading-[26px] text-left text-[#1F2937]">
          *제목
        </div>
        <input
          className="w-[1200px] h-[56px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] outline-none mt-4"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <div className="text-[18px] font-bold leading-[26px] text-left text-[#1F2937]">
          *내용
        </div>
        <textarea
          className="w-[1200px] h-[150px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] outline-none resize-none mt-4"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
}
