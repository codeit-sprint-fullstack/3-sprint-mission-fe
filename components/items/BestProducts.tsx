"use client";
import { getBestProducts } from "@/services/productApi";
import { ProductListResponse } from "@/types/products";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import BestProductSkeleton from "./BestProductSkeleton";

const BestProducts = () => {
  const [pageSize, setPageSize] = useState<number>(4);

  useEffect(() => {
    // 화면 크기에 따라 pageSize 조정
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width > 1024) setPageSize(4);
      else if (width > 744) setPageSize(2);
      else setPageSize(1);
    };

    updatePageSize(); // 초기 pageSize 설정
    window.addEventListener("resize", updatePageSize); // 화면 리사이즈 시 업데이트

    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const { data: items, isLoading } = useQuery<ProductListResponse>({
    queryKey: ["bestProducts", pageSize],
    queryFn: () => getBestProducts(pageSize),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 10,
    placeholderData: (previousData) => previousData,
  });

  if (isLoading) return <BestProductSkeleton pageSize={pageSize} />;

  if (!items) return null;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">베스트 상품</h2>
      <ul className="flex gap-6">
        {items.list.map((item) => (
          <ProductCard key={item.id} item={item} type="best" />
        ))}
      </ul>
    </div>
  );
};

export default BestProducts;
