"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { axiosProductById, Product } from "@/src/utils/axios";
import ProductInfo from "@/src/components/productDetail/ProductInfo";
import ProductComment from "@/src/components/productDetail/ProductComment";

export default function ProductDetail() {
  const { productId } = useParams();
  const productIdStr = Array.isArray(productId) ? productId[0] : productId;

  const {
    data: product,
    isLoading,
    error,
  } = useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: () => axiosProductById(productId as string),
    enabled: !!productId,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div className="w-[1200px] h-[1257px] mx-auto mt-[20px] ">
      <div className="flex flex-row w-[1200px] h-[496px] ">
        <Image
          src="/productdetailImage.png"
          alt="productdetailImage"
          className="cursor-pointer rounded-lg"
          width={486}
          height={486}
        />
        <ProductInfo product={product} />
      </div>
      <div className="border-b border-[#E5E7EB] w-full mx-auto mt-[40px]" />
      <ProductComment productId={productIdStr} />
    </div>
  );
}
