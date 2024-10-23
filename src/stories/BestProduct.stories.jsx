import Product from "../components/products/Product";

export default {
  title: "Products/BestProduct",
  component: Product,
  tags: ["autodocs"],
};

const Template = (args) => <Product {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "판다마켓",
  price: 50000,
  likes: 50,
  image: "https://nomadlee.com/wp-content/uploads/2024/09/16.webp",
  best: true,
};
