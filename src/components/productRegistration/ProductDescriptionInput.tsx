import { useAtom } from "jotai";
import { productDescriptionState } from "../../jotai/atoms/productFormState";
import { TextArea, ProductInputContainer, RegistrationH2 } from "./ProductRegistrationComponent";

const ProductDescriptionInput = () => {
  const [productDescription, setProductDescription] = useAtom(productDescriptionState);

  return (
    <ProductInputContainer>
      <RegistrationH2>상품 소개</RegistrationH2>
      <TextArea
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
    </ProductInputContainer>
  );
};

export default ProductDescriptionInput;
