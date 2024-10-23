import Footer from "../components/common/footer";
import Nav from "../components/common/Nav";
import { ProductSortingProvider } from "../contexts/productSortingContext";
import BestProductContainer from "../components/products/BestProductContainer";
import styled from "styled-components";
import ProductsContainer from "../components/products/ProductsContainer";

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContainer = styled.div`
  width: 120rem;
`;

function Products() {
  return (
    <ProductSortingProvider defaultValue="최신순">
      <MainContainer>
        <Nav />
        <PageContainer>
          <BestProductContainer />
          <ProductsContainer />
        </PageContainer>
        <Footer />
      </MainContainer>
    </ProductSortingProvider>
  );
}

export default Products;
