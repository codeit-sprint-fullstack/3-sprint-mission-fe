import ProductRegistrationComponent from "../components/productRegistration/ProductRegistrationComponent";

function ProductRegistration() {
  return (
    <ProductRegistrationComponent>
      <ProductRegistrationComponent.Title />
      <ProductRegistrationComponent.NameInput />
      <ProductRegistrationComponent.DescriptionInput />
      <ProductRegistrationComponent.PriceInput />
      <ProductRegistrationComponent.TagsInput />
    </ProductRegistrationComponent>
  );
}

export default ProductRegistration;
