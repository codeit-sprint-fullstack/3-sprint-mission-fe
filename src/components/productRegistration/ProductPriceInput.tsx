import { useAtom } from "jotai";
import { ProductInputContainer, RegistrationH2, Input } from "./ProductRegistrationComponent";
import { productPriceState } from "../../jotai/atoms/productFormState";

const ProductPriceInput = () => {
  const [productPrice, setProductPrice] = useAtom(productPriceState);

  return (
    <ProductInputContainer>
      <RegistrationH2>판매가격</RegistrationH2>
      <Input
        type="number"
        min={0}
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
    </ProductInputContainer>
  );
};

export default ProductPriceInput;
