import { useAtom } from "jotai";
import { TextArea, ProductInputContainer, RegistrationH2 } from "./ProductRegistrationComponent";
import { productPriceState } from "../../jotai/atoms/productFormState";

const ProductPriceInput = () => {
  const [productPrice, setProductPrice] = useAtom(productPriceState);

  return (
    <ProductInputContainer>
      <RegistrationH2>판매가격</RegistrationH2>
      <TextArea value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
    </ProductInputContainer>
  );
};

export default ProductPriceInput;
