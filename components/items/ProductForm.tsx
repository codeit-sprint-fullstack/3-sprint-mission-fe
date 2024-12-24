"use client";

import CommonBtn from "@/components/common/button/CommonBtn";
import AuthInput from "@/components/common/input/AuthInput";
import { createProduct, updateProduct } from "@/services/productApi";
import { ProductCreateRequest } from "@/types/products";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import HashTagList from "@/components/common/hashtag/HashTagList";
import { useRouter } from "next/navigation";

type ProductFormProps = {
  defaultValues?: ProductCreateRequest;
  productId?: number;
  isEdit?: boolean;
};

const ProductForm = ({
  defaultValues,
  productId,
  isEdit = false,
}: ProductFormProps) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProductCreateRequest>({
    defaultValues: defaultValues || {
      images: [],
      tags: [],
      price: 0,
      description: "",
      name: "",
    },
  });

  //"https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png

  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      alert("상품이 등록되었습니다.");
      router.push(`/items`);
    },
    onError: (error) => {
      console.error(error);
      alert("상품 등록에 실패했습니다.");
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: (data: ProductCreateRequest) => updateProduct(productId!, data),
    onSuccess: () => {
      alert("상품이 수정되었습니다.");
      router.push(`/items/${productId}`);
    },
  });

  const onSubmit: SubmitHandler<ProductCreateRequest> = async (data) => {
    if (isEdit) {
      updateProductMutation.mutate(data);
    } else {
      createProductMutation.mutate(data);
    }
  };

  // 태그 입력을 위한 별도의 상태
  const [tagInput, setTagInput] = useState("");
  const tags = watch("tags");

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = tagInput.trim();

      // 유효성 검사
      if (newTag.length > 5) {
        alert("태그는 5자 이내로 입력해주세요");
        return;
      }

      if (newTag && !tags.includes(newTag)) {
        setValue("tags", [...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue(
      "tags",
      tags.filter((tag) => tag !== tagToRemove),
    );
  };

  // name, description, price 필드 값을 감지하여 버튼 활성화 여부 결정
  const isFormValid =
    !!watch("name") && !!watch("description") && watch("price") >= 0;

  return (
    <form className="max-w-1200 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-xl font-bold">
          {isEdit ? "상품 수정하기" : "상품 등록하기"}
        </h1>
        <CommonBtn disabled={!isFormValid}> {isEdit ? "수정" : "등록"}</CommonBtn>
      </div>

      <div className="flex flex-col gap-8">
        {/* 상품명 */}
        <div className="flex flex-col">
          <AuthInput
            title="상품명"
            placeholder="상품명을 입력해주세요"
            isError={!!errors.name}
            type="text"
            register={register("name", { required: "상품명을 입력해주세요" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* 상품 소개 */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-xl font-bold">
            상품 소개
          </label>
          <textarea
            {...register("description", {
              required: "상품 소개를 입력해주세요",
            })}
            id="description"
            placeholder="상품 소개를 입력해주세요"
            className="font-base mt-2 min-h-[280px] w-full resize-none rounded-lg border-none bg-gray-light px-4 py-4 focus:outline-1 focus:outline-blue"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <AuthInput
            title="판매가격"
            placeholder="판매 가격을 입력해주세요"
            isError={!!errors.price}
            type="number"
            register={register("price", {
              required: "가격을 입력해주세요",
              valueAsNumber: true,
            })}
          />

          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-bold">태그</h2>
          <div
            className={`mt-2 flex h-14 w-full items-center justify-between rounded-xl border bg-gray-light px-4 ${errors.tags ? "border-red-500" : "border-gray-light"}`}
          >
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagInput}
              placeholder="태그를 입력하고 Enter를 눌러주세요"
              className="flex-1 bg-[#F3F4F6] text-base placeholder:text-[#9CA3AF] focus:outline-none"
              maxLength={5}
            />
          </div>
          {errors.tags && (
            <p className="mt-1 text-sm text-red-500">{errors.tags.message}</p>
          )}
          <HashTagList tags={tags} onRemove={removeTag} />
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
