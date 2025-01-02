'use client';

import ProductRegistrationForm from '@/components/items/registration/registrationForm';
import { useCreateProductMutation } from '@/hooks/products/useCreateProductMutation';

export default function Page() {
  const mutation = useCreateProductMutation();

  return <ProductRegistrationForm mutation={mutation} />;
}
