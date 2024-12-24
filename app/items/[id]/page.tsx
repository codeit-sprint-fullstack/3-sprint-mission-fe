"use client";

import ConfirmDeleteModal from "@/components/common/modal/ConfirmDeleteModal";
import ProductInfoSection from "@/components/items/ProductInfoSection";
import { deleteProduct } from "@/services/productApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const { id: productId } = params;

  const router = useRouter();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () => deleteProduct(Number(productId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      router.push("/items");
    },
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    console.log("close");
    setIsDeleteModalOpen(false);
  };

  return (
    <article className="px-4 pt-4 sm:px-6 sm:pt-6">
      <ProductInfoSection
        productId={productId}
        onOpenDeleteModal={handleOpenDeleteModal}
      />
      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          message="정말로 상품을 삭제하시겠어요?"
          leftBtnText="취소"
          rightBtnText="네"
          type="red"
          onClose={handleCloseDeleteModal}
          onConfirm={() => {
            deleteMutation.mutate(); // 실제 삭제 API 호출
            handleCloseDeleteModal(); // 모달 닫기
          }}
        />
      )}
    </article>
  );
};

export default ProductDetailPage;
