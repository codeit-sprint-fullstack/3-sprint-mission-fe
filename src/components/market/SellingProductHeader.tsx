"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
import Image from "next/image";
import { axiosProduct, Product } from "@/src/utils/axios";
import Link from "next/link";

export default function SellingProductHeader() {
  const [selectedSort, setSelectedSort] = useState("최신순");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: { products = [], total = 0 } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", searchTerm, selectedSort, page, pageSize],
    queryFn: () =>
      axiosProduct(
        searchTerm,
        selectedSort === "좋아요순" ? "like" : "latest",
        page,
        pageSize
      ),
  });

  const handleSearch = () => {
    setSearchTerm(searchQuery);
    setPage(1);
  };

  const totalPages = Math.ceil(total / pageSize);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <div>
      <div className="w-[1200px] mx-auto mt-[40px] flex flex-row justify-between items-center">
        <div className="text-[20px] font-bold leading-[32px] text-left text-gray-900">
          판매중인 상품
        </div>
        <div className="flex flex-row items-center gap-[12px]">
          <div className="relative w-full items-center">
            <Image
              src="/search.png"
              alt="search"
              className="absolute left-[10px] top-1/2 transform -translate-y-1/2 cursor-pointer"
              width={24}
              height={24}
              onClick={handleSearch}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="검색할 상품을 입력해주세요"
              className="w-[325px] h-[42px] px-[20px] py-[9px] pl-[35px] rounded-[12px] bg-[#F3F4F6] text-[#9CA3AF] text-[16px] outline-none"
            />
          </div>
          <Link href="/productRegistration">
            <div className="flex justify-center items-center w-[133px] h-[42px] px-[23px] py-[12px] rounded-[8px] cursor-pointer bg-[#3692FF] text-[12px] font-semibold leading-[26px] text-left text-[#F3F4F6]">
              상품 등록하기
            </div>
          </Link>
          <Dropdown
            options={["최신순", "좋아요순"]}
            selectedValue={selectedSort}
            placeholder={selectedSort}
            onValueChange={setSelectedSort}
            className="w-[130px] h-[42px] rounded-[12px] border border-[#E5E7EB] font-[500] text-[#1F2937]"
            buttonClassName="bg-white rounded-[12px] text-[#1F2937]"
            listClassName="bg-white rounded-[12px] border border-[#E5E7EB] text-[#1F2937]"
            itemClassName="text-center rounded-[12px] font-[500] text-[#1F2937]"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-start gap-[16px] w-[1200px] my-[24px] ml-5">
        {products.map((product) => (
          <Link key={product.id} href={`/productDetail/${product.id}`} passHref>
            <div
              key={product.id}
              className="w-[221px] h-[317px] rounded-lg p-2"
            >
              <Image
                src="/defaultimage.png"
                alt={product.name}
                className="cursor-pointer rounded-lg"
                width={282}
                height={282}
              />
              <div className="flex flex-col gap-3 mt-2">
                <div className="text-[14px] font-[600] leading-[24px] text-left text-[#1F2937]">
                  {product.name}
                </div>
                <div className="text-[16px] font-[700] leading-[26px] text-left text-[#1F2937]">
                  {product.price.toLocaleString()}원
                </div>
                <div className="flex flex-row items-center gap-1">
                  <Image
                    src="/heartIcon.svg"
                    alt="heartIcon"
                    className="cursor-pointer"
                    width={16}
                    height={16}
                  />
                  <div className="text-[12px] font-[600] leading-[18px] text-left text-[#4B5563]">
                    {product.like}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center my-14 gap-2">
        <Image
          src="/right.png"
          alt="right"
          className={`cursor-pointer rounded-lg ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          width={40}
          height={40}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        />
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index + 1}
            onClick={() => setPage(index + 1)}
            className={`w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer border border-[#E5E7EB]
        ${page === index + 1 ? "bg-[#2F80ED] text-[#F9FAFB]" : "bg-[#FFFFFF] text-[black]"}`}
          >
            {index + 1}
          </div>
        ))}
        <Image
          src="/left.png"
          alt="left"
          className={`cursor-pointer rounded-lg ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          width={40}
          height={40}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        />
      </div>
    </div>
  );
}
