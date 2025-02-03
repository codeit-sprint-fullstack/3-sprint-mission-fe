import Image from "next/image";
import { useState } from "react";
import Default_Image from "@/public/images/img_default.png";
import HeartButton from "../common/button/HeartButton";
import Link from "next/link";

type ProductCardProps = {
  item: {
    id: number;
    images: string[]; // 이미지 URL 배열로 되어있는 의도가 무엇이지? -> 미디어 쿼리에 따라 다른 이미지를 보여주기 위함(크기에 따른 이미지 변경)
    description: string;
    favoriteCount: number;
    name: string;
    price: number;
  };
  type: "best" | "normal"; // 베스트 상품인지 전체 상품인지 구분
};

const ProductCard = ({ item, type }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  if (!item) return null;

  const onLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  const image = item.images.length === 0 ? Default_Image : item.images[0];

  return (
    <Link href={`/items/${item.id}`}>
      <li key={item.id} className="flex flex-col gap-4">
        <Image
          src={image}
          alt={item.description}
          width={type === "best" ? 280 : 220} // type에 따른 크기 지정
          height={type === "best" ? 280 : 220} // type에 따른 크기 지정
          className="rounded-[16px] object-cover sm:h-[168px] sm:w-[168px] md:h-[280px] md:w-[280px]"
        />
        <p className="text-[14px] font-medium">{item.name}</p>
        <span className="text-[16px] font-bold">
          {formatNumberWithCommas(item.price)}원
        </span>
        <div className="w-fit">
          <HeartButton
            id={item.id}
            isFavorite={isLiked}
            size={16}
            likeCount={item.favoriteCount}
            onToggleFavorite={onLikeToggle}
          />
        </div>
      </li>
    </Link>
  );
};

export default ProductCard;

const formatNumberWithCommas = (number: number) => {
  return number.toLocaleString();
};
