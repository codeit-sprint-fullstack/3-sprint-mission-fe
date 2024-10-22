import BestProduct from "../components/products/BestProduct";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default {
  title: "Products/BestProduct",
  component: BestProduct,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <Container>
          <Story />
        </Container>
      );
    },
  ],
};

const Template = (args) => <BestProduct {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "판다마켓",
  price: 50000,
  likes: 50,
  image: "https://nomadlee.com/wp-content/uploads/2024/09/16.webp",
};
