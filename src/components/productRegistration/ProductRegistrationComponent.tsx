import { FormEvent, KeyboardEvent, ReactNode } from "react";
import styled from "styled-components";
import ProductNameInput from "./ProductNameInput";
import ProductDescriptionInput from "./ProductDescriptionInput";
import ProductPriceInput from "./ProductPriceInput";
import ProductTagsInput from "./ProductTagsInput";
import RegistrationTitle from "./RegistrationTitle";
import { useAtom } from "jotai";
import { productFormState } from "../../jotai/atoms/productFormState";
import { createProduct } from "../../apis/ProductService";
import { useNavigate } from "react-router-dom";

const ProductRegistrationForm = styled.form`
  padding-top: 2.6rem;
  padding-bottom: 16.2rem;
  width: 120rem;
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.media.medium} {
    width: 100%;
    padding: 1.8rem 2.4rem 19.4rem 2.4rem;
  }
  ${(props) => props.theme.media.small} {
    width: 100%;
    padding: 2.4rem 1.6rem 18.6rem 1.6rem;
  }
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
  const [productForm, setProductForm] = useAtom(productFormState);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newProduct = await createProduct({ ...productForm, price: Number(productForm.price) });
    setProductForm();
    navigate(`/product/${newProduct._id}`);
  };

  const preventEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <ProductRegistrationForm onKeyDown={preventEnter} onSubmit={handleSubmit}>
      {children}
    </ProductRegistrationForm>
  );
}

export default ProductRegistrationComponent;

ProductRegistrationComponent.Title = RegistrationTitle;
ProductRegistrationComponent.NameInput = ProductNameInput;
ProductRegistrationComponent.DescriptionInput = ProductDescriptionInput;
ProductRegistrationComponent.PriceInput = ProductPriceInput;
ProductRegistrationComponent.TagsInput = ProductTagsInput;
