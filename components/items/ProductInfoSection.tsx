"use client";

import Image from "next/image";
import BackButton from "@/components/common/button/BackButton";
import ic_profile from "@/public/icons/ic_profile.png";
import kebabIcon from "@/public/icons/ic_kebab.png";
import PostAndCommentActionsDropdown from "@/components/common/dropdown/PostAndCommentActionsDropdown";
import { useState } from "react";
import CommentList from "@/components/common/comment/CommentList";
import CommentInput from "@/components/common/comment/CommentInput";
import HashTag from "@/components/common/hashtag/HashTagList";
import HeartButton from "@/components/common/button/HeartButton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  favoriteProduct,
  getProduct,
  unfavoriteProduct,
} from "@/services/productApi";
import LoadingSpinner from "@/components/common/loading/LoadingSpinner";
import { DEFAULT_IMAGE } from "@/utils/defaultImage";

type ProductInfoSectionProps = {
  productId: string;
  onOpenDeleteModal: () => void;
};

const ProductInfoSection = ({
  productId,
  onOpenDeleteModal,
}: ProductInfoSectionProps) => {
  const queryClient = useQueryClient();

  const [isKebabMenuOpen, setIsKebabMenuOpen] = useState(false);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(Number(productId)),
  });

  const toggleKebabMenu = () => {
    setIsKebabMenuOpen((prev) => !prev);
  };

  const favoriteMutation = useMutation({
    mutationFn: (id: number) => favoriteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });

  const unfavoriteMutation = useMutation({
    mutationFn: (id: number) => unfavoriteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });

  const handleToggleFavorite = (id: number, isFavorite: boolean) => {
    if (isFavorite) {
      unfavoriteMutation.mutate(id);
    } else {
      favoriteMutation.mutate(id);
    }
  };

  // 삭제 버튼 클릭시 모달을 여는 함수
  const handleDelete = () => {
    onOpenDeleteModal();
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러가 발생했습니다. 다시 시도해주세요.</div>;
  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* 상품 소개 관련 */}
      <section className="flex h-full max-h-[486px] sm:gap-4 md:gap-6">
        <div className="max-h-[486px] max-w-[486px] flex-1 object-cover">
          <Image
            src={product.images[0] ?? DEFAULT_IMAGE}
            alt="상품 이미지"
            width={486}
            height={486}
            priority
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="relative flex justify-between">
              <h1 className="text-2xl font-semibold">{product.name}</h1>
              {/* {product.ownerId === userInfo?.id && ( */}
              <button onClick={toggleKebabMenu}>
                <Image src={kebabIcon} alt="더보기" width={24} height={24} />
              </button>
              <div className="absolute right-1 top-7">
                {isKebabMenuOpen && (
                  <PostAndCommentActionsDropdown
                    type="post"
                    basePath="/items"
                    id={product.id}
                    onDelete={handleDelete}
                  />
                )}
              </div>
            </div>
            <p className="mt-6 text-5xl font-bold">
              {product.price.toLocaleString()}원
            </p>
            <hr className="mt-4" />
            {/* 상품 소개 */}
            <div className="mt-6 text-[#4B5563]">
              <h2 className="font-semibold">상품 소개</h2>
              <p>{product.description}</p>
            </div>
            {/* 상품 태그 */}
            <div className="mt-6">
              <h2 className="text-[#4B5563]">상품 태그</h2>
              <ul className="mt-4 flex gap-2">
                <HashTag
                  key={product.id}
                  tags={product.tags}
                  hasRemoveButton={false}
                />
                {/* {product.tags.map((tag) => (
                  // <p>{tag}</p>
                ))} */}
              </ul>
            </div>
          </div>
          {/* 작성자 프로필 및 업로드일*/}

          <div className="flex items-center justify-between">
            {/* 프로필 */}
            <div className="flex items-center justify-center">
              <div className="mr-4">
                <Image
                  src={ic_profile}
                  alt="프로필 이미지"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-[#4B5563]">
                  {product.ownerNickname}
                </span>
                <span className="text-[#9CA3AF]">
                  {new Date(product.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* 좋아요 */}
            <div className="border-l-2 border-gray-footer_text pl-8">
              <HeartButton
                id={product.id}
                likeCount={product.favoriteCount}
                isFavorite={product.isFavorite}
                size={32}
                isBorder={true}
                onToggleFavorite={handleToggleFavorite}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="my-10 border" />
      {/* 상품 문의 관련 */}
      <section>
        {/* 문의 댓글창 */}
        <CommentInput
          title="문의하기"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          productId={product.id}
        />
        {/* 문의 댓글 리스트 */}
        <CommentList id={productId} />
      </section>
      <BackButton backPath="/items">목록으로 돌아가기</BackButton>
    </div>
  );
};

export default ProductInfoSection;
