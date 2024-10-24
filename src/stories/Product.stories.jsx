import Product from "../components/products/Product";

export default {
  title: "Products/Product",
  component: Product,
  tags: ["autodocs"],
};

const Template = (args) => <Product {...args} />;

export const BestProduct = Template.bind({});

BestProduct.args = {
  title: "판다마켓",
  price: 50000,
  likes: 50,
  image: "https://nomadlee.com/wp-content/uploads/2024/09/16.webp",
  best: true,
};

export const NormalProduct = Template.bind({});

NormalProduct.args = {
  title: "판다마켓",
  price: 50000,
  likes: 50,
  image: "https://nomadlee.com/wp-content/uploads/2024/09/16.webp",
  best: false,
};
