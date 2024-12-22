"use client";

import Image from "next/image";
import BackButton from "@/components/common/button/BackButton";

import iPadImage from "@/public/images/iPad.png";
import ic_profile from "@/public/icons/ic_profile.png";
import kebabIcon from "@/public/icons/ic_kebab.png";
import PostAndCommentActionsDropdown from "@/components/common/dropdown/PostAndCommentActionsDropdown";
import { useState } from "react";
import CommentList from "@/components/post/PostDetail/CommentList";
import CommentInput from "@/components/post/PostDetail/CommentInput";
import HashTag from "@/components/common/hashtag/HashTag";
import HeartButton from "@/components/common/button/HeartButton";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProduct,
  favoriteProduct,
  getProduct,
  unfavoriteProduct,
  updateProduct,
} from "@/services/productApi";
import LoadingSpinner from "@/components/common/loading/LoadingSpinner";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const queryClient = useQueryClient();
  const { id: productId } = params;

  const { userInfo } = useAuthStore();
  const router = useRouter();
  const [isKebabMenuOpen, setIsKebabMenuOpen] = useState(false);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(Number(productId)),
  });

  const updateMutation = useMutation({
    mutationFn: (data) => updateProduct(Number(productId), data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteProduct(Number(productId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      router.push("/items");
    },
  });

  console.log(product);

  const toggleKebabMenu = () => {
    setIsKebabMenuOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      deleteMutation.mutate();
    }
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

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러가 발생했습니다. 다시 시도해주세요.</div>;
  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <article className="px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto max-w-[1200px]">
        {/* 상품 소개 관련 */}
        <section className="flex h-full max-h-[486px] sm:gap-4 md:gap-6">
          <div className="max-h-[486px] max-w-[486px] flex-1">
            <Image
              src={product.images[0]}
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
                {product.ownerId === userInfo?.id && (
                  <button onClick={toggleKebabMenu}>
                    <Image
                      src={kebabIcon}
                      alt="더보기"
                      width={24}
                      height={24}
                    />
                  </button>
                )}
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
                  {product.tags.map((tag) => (
                    <HashTag key={tag} text={tag} />
                  ))}
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
        <BackButton>목록으로 돌아가기</BackButton>
      </div>
    </article>
  );
};

export default ProductDetailPage;
