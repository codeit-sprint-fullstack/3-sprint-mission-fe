"use client";

import LoadingSpinner from "@/components/common/loading/LoadingSpinner";
import ProductForm from "@/components/items/ProductForm";
import { getProduct } from "@/services/productApi";
import { ProductCreateRequest } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

const ProductUpdatePage = ({ params }: { params: { id: string } }) => {
  const productId = Number(params.id);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  console.log(product);

  if (isLoading) return <LoadingSpinner />;
  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  const productData: ProductCreateRequest = {
    name: product.name,
    description: product.description,
    price: product.price,
    tags: product.tags,
    images: product.images,
  };

  return (
    <section className="mx-auto box-border max-w-[1200px] px-6 pb-40 pt-6">
      <ProductForm
        defaultValues={productData}
        productId={productId}
        isEdit={true}
      />
    </section>
  );
};

export default ProductUpdatePage;
