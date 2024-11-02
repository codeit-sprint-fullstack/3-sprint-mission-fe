import { FormEvent, ReactNode } from "react";
import styled from "styled-components";
import ProductNameInput from "./ProductNameInput";
import ProductDescriptionInput from "./ProductDescriptionInput";
import ProductPriceInput from "./ProductPriceInput";
import ProductTagsInput from "./ProductTagsInput";
import RegistrationTitle from "./RegistrationTitle";

const ProductRegistrationForm = styled.form`
  margin-top: 2.6rem;
  margin-bottom: 16.2rem;
  width: 120rem;
  display: flex;
  flex-direction: column;
`;

export const RegistrationH2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.6rem;
`;

export const ProductInputContainer = styled.div`
  width: 100%;
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;
`;

export const TextArea = styled.textarea`
  height: 28.2rem;
`;

function ProductRegistrationComponent({ children }: { children: ReactNode }) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return <ProductRegistrationForm onSubmit={handleSubmit}>{children}</ProductRegistrationForm>;
}

export default ProductRegistrationComponent;

ProductRegistrationComponent.Title = RegistrationTitle;
ProductRegistrationComponent.NameInput = ProductNameInput;
ProductRegistrationComponent.DescriptionInput = ProductDescriptionInput;
ProductRegistrationComponent.PriceInput = ProductPriceInput;
ProductRegistrationComponent.TagsInput = ProductTagsInput;
