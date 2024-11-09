import styled from 'styled-components';
import BestProducts from './BestProducts';
import ProductsForSale from './ProductsForSale';

const Main = () => {
  return (
    <MainS>
      <Section>
        <BestProducts />
        <ProductsForSale />
      </Section>
    </MainS>
  );
};

export default Main;

const MainS = styled.main`
  margin-top: 7rem;
  min-height: 140rem;
  padding: 2.6rem 2.4rem 0;

  @media (max-width: 768px) {
    padding: 2.6rem 1.6rem 0;
  }
`;

const Section = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
