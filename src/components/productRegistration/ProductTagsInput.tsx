import { useAtom } from "jotai";
import { productTagsState, productTagState } from "../../jotai/atoms/productFormState";
import { Input, ProductInputContainer, RegistrationH2 } from "./ProductRegistrationComponent";
import { KeyboardEvent } from "react";
import TagContainer from "./TagContainer";

const ProductTagsInput = () => {
  const [productTag, setProductTag] = useAtom(productTagState);
  const [productTags, setProductTags] = useAtom(productTagsState);
  const handleTags = (e: KeyboardEvent) => {
    if (e.type === "keyup" && e.key === "Enter" && productTag) {
      if (productTags.includes(productTag)) return alert("이미 있는 태그입니다.");
      setProductTags((prevTags) => [...prevTags, productTag]);
      setProductTag("");
    }
  };

  return (
    <ProductInputContainer>
      <RegistrationH2>태그</RegistrationH2>
      <Input
        value={productTag}
        onKeyUp={handleTags}
        onChange={(e) => setProductTag(e.target.value)}
      />
      <TagContainer tags={productTags} />
    </ProductInputContainer>
  );
};

export default ProductTagsInput;
