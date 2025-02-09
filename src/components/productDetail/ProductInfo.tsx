import Image from "next/image";
import { Product } from "@/src/utils/axios";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="ml-[24px]">
      <div className="text-[24px] font-semibold leading-[32px] text-left text-[#1F2937]">
        {product.name}
      </div>
      <div className="text-[40px] font-semibold leading-[47.73px] text-left text-[#1F2937] mt-[16px]">
        {product.price.toLocaleString()}원
      </div>
      <div className="border-b border-[#E5E7EB] w-full mx-auto mt-[16px]" />

      <div className="text-[16px] font-semibold leading-[26px] text-left text-[#4B5563] mt-[16px]">
        상품소개
      </div>
      <div className="text-[16px] font-normal leading-[26px] text-left text-[#4B5563] mt-[16px]">
        {product.description}
      </div>

      <div className="text-[16px] font-[600] leading-[26px] text-left text-[#4B5563] mt-[16px]">
        상품 태그
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {product?.tags?.map((tag, index) => (
          <div
            key={index}
            className="h-[36px] rounded-[26px] bg-[#F3F4F6] px-[16px] py-[6px] flex items-center justify-start text-[#1F2937] font-[600] text-[16px]"
          >
            #{tag}
          </div>
        ))}
      </div>

      <div className="mt-[62px] w-[690px] flex flex-row justify-between items-center">
        <div className="flex">
          <Image src="/userImage.png" alt="userImage" width={40} height={40} />
          <div className="ml-[16px]">
            <div>{product.user?.nickname}</div>
            <div>{new Date(product.createdAt).toLocaleDateString("ko-KR")}</div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center rounded-[35px] border border-[#E5E7EB] px-[12px] py-[4px]">
          <Image src="/like.png" alt="like" width={32} height={32} />
          <div className="text-[16px] font-[500] leading-[26px] text-left text-[#6B7280]">
            {product.like}
          </div>
        </div>
      </div>
    </div>
  );
}
