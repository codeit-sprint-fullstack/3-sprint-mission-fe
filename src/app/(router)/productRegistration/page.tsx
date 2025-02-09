"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/src/lib/axios";
import Image from "next/image";

export default function ProductRegistration() {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("/product", {
        name,
        description,
        price: Number(price),
        imageUrl: "https://example.com/default-product.jpg",
        tags,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      alert("상품이 등록되었습니다.");
      setName("");
      setDescription("");
      setPrice("");
      setTags([]);
      setTagInput("");
    },
    onError: (error) => {
      console.error(error);
      alert("상품 등록에 실패했습니다.");
    },
  });

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="w-[1200px] mx-auto mt-[24px]">
      <div className="flex flex-row justify-between items-center">
        <div className="text-[20px] font-bold leading-[32px] text-left text-[#1F2937]">
          상품 등록하기
        </div>
        <button
          onClick={() => mutation.mutate()}
          disabled={mutation.isLoading}
          className="flex justify-center items-center w-[80px] h-[42px] px-[23px] py-[12px] rounded-[8px] bg-[#3692FF] text-[16px] font-semibold leading-[26px] text-[#F3F4F6] disabled:opacity-50"
        >
          등록
        </button>
      </div>

      <div className="mt-10 my-20">
        <div className="text-[20px] font-bold leading-[32px] text-left text-[#1F2937]">
          상품명
        </div>
        <input
          className="w-[100%] h-[56px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] outline-none text-[16px] font-normal leading-[26px] text-left text-[#9CA3AF] mt-4"
          placeholder="상품명을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="text-[20px] font-bold leading-[32px] text-left text-[#1F2937] mt-4">
          상품 소개
        </div>
        <textarea
          className="w-[100%] h-[150px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] outline-none text-[16px] font-normal leading-[26px] text-left text-[#9CA3AF] mt-4"
          placeholder="상품 소개를 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="text-[20px] font-bold leading-[32px] text-left text-[#1F2937] mt-4">
          판매 가격
        </div>
        <input
          type="number"
          className="w-[100%] h-[56px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] outline-none text-[16px] font-normal leading-[26px] text-left text-[#9CA3AF] mt-4"
          placeholder="판매 가격을 입력해주세요"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <div className="text-[20px] font-bold leading-[32px] text-left text-[#1F2937] mt-4">
          태그
        </div>
        <input
          className="w-[100%] h-[56px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] outline-none text-[16px] font-normal leading-[26px] text-left text-[#9CA3AF] mt-4"
          placeholder="태그를 입력 후 Enter 키를 눌러주세요"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
        />

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center px-3 py-1 bg-[#F3F4F6] rounded-full text-sm text-gray-700"
            >
              # {tag}
              <button
                onClick={() => removeTag(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                <Image
                  src="/tagdeleteIcon.png"
                  alt="tagdeleteIcon"
                  className="cursor-pointer rounded-lg"
                  width={24}
                  height={24}
                />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
