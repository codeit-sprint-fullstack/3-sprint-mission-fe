"use client";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/src/lib/axios";
import Image from "next/image";
import { axiosProduct } from "@/src/utils/axios";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  like: number;
  imageUrl: string;
}

export default function BestProduct() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [selectedSort, setSelectedSort] = useState("좋아요순");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: { products = [], total = 0 } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", searchQuery, selectedSort, page, pageSize],
    queryFn: () =>
      axiosProduct(
        searchQuery,
        selectedSort === "좋아요순" ? "like" : "latest",
        page,
        pageSize
      ),
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <div>
      <div className="text-[20px] font-[700] leading-[32px] text-left text-gray-900">
        베스트 상품
      </div>
      <div className="flex w-[1200px] h-[378px] gap-[24px] mt-2">
        {products.map((product) => (
          <Link key={product.id} href={`/productDetail/${product.id}`} passHref>
            <div key={product.id} className="w-[282px] h-[378px]">
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
    </div>
  );
}
