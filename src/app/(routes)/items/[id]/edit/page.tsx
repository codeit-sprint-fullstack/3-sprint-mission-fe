'use client';

import ProductRegistrationForm from '@/components/items/registration/registrationForm';
import { useEditProductMutation } from '@/hooks/products/useEditProductMutation';
import { useProductQuery } from '@/hooks/products/useProductQuery';
import { ParamsProps } from '@/lib/types/props.types';

export default function Page({ params }: ParamsProps) {
  const { data } = useProductQuery({ id: params.id });
  const mutation = useEditProductMutation(params.id);

  return (
    <ProductRegistrationForm
      initialValue={data}
      mutation={mutation}
    />
  );
}
