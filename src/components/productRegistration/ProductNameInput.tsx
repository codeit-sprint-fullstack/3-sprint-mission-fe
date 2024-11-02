import { useAtom } from "jotai";
import { productNameState } from "../../jotai/atoms/productFormState";
import { Input, ProductInputContainer, RegistrationH2 } from "./ProductRegistrationComponent";

const ProductNameInput = () => {
  const [productName, setProductName] = useAtom(productNameState);

  return (
    <ProductInputContainer>
      <RegistrationH2>상품명</RegistrationH2>
      <Input value={productName} onChange={(e) => setProductName(e.target.value)} />
    </ProductInputContainer>
  );
};

export default ProductNameInput;
