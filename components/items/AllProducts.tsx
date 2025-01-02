"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProductList } from "@/services/productApi";
import { ProductListResponse } from "@/types/products";
import SearchBar from "@/components/common/search/SearchBar";
import AddProductButton from "./AddProductButton";
import SortByDropdown from "@/components/common/dropdown/SortByDropdown";
import Pagination from "@/components/common/pagination/Pagination";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import AllProductsSkeleton from "./AllProductsSkeleton";

const AllProducts = () => {
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState<"recent" | "favorite">("recent");
  const [searchKeyword, setSearchKeyword] = useState("");

  // 검색어 디바운스 처리
  const debouncedSearch = useDebounce(searchKeyword, 500);

  useEffect(() => {
    // 화면 크기에 따라 pageSize 조정
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width > 1280) setPageSize(10);
      else if (width > 744) setPageSize(6);
      else setPageSize(4);
    };

    updatePageSize(); // 초기 pageSize 설정
    window.addEventListener("resize", updatePageSize); // 화면 리사이즈 시 업데이트

    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  // React Query로 상품 목록 조회
  const { data: items, isLoading } = useQuery<ProductListResponse>({
    queryKey: ["products", pageNo, pageSize, orderBy, debouncedSearch],
    queryFn: () => getProductList(pageNo, pageSize, orderBy, debouncedSearch),
    placeholderData: (previousData) => previousData, // 이전 데이터를 새로운 데이터가 로드될 때까지 표시
    staleTime: 1000 * 60 * 5, // 5분간 데이터 fresh 유지
    refetchOnWindowFocus: false,
  });

  // 검색어나 정렬 변경 시 첫 페이지로 이동
  useEffect(() => {
    setPageNo(1);
  }, [orderBy, debouncedSearch]);

  if (isLoading) {
    return <AllProductsSkeleton pageSize={pageSize} />;
  }

  if (!items?.list) return null;

  return (
    <section>
      {/* 데스크탑 버전 */}
      <div className="mb-4 hidden items-center justify-between md:flex">
        <h2 className="whitespace-nowrap text-xl font-bold">판매 중인 상품</h2>
        <div className="flex gap-4">
          <SearchBar setSearchKeyword={setSearchKeyword} />
          <AddProductButton />
          <SortByDropdown setOrderBy={setOrderBy}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </SortByDropdown>
        </div>
      </div>

      {/* 모바일 버전 */}
      {/* <div className="mb-4 flex flex-wrap items-center justify-between md:hidden">
        <div className="mb-4 flex w-full items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">판매 중인 상품</h2>
          <AddProductButton />
        </div>
        <div className="flex w-full items-center justify-between gap-4">
          <ProductSearchBar setSearchKeyword={setSearchKeyword} />
          <SortByDropdown setOrderBy={setOrderBy}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </SortByDropdown>
        </div>
      </div> */}

      <ul className="grid grid-cols-2 gap-5 py-5 md:grid-cols-3 xl:grid-cols-5">
        {items.list.map((item) => (
          <ProductCard key={item.id} item={item} type="normal" />
        ))}
      </ul>

      <Pagination
        pageNo={pageNo}
        setPageNo={setPageNo}
        totalPage={Math.ceil(items.totalCount / pageSize)}
      />
    </section>
  );
};

export default AllProducts;
