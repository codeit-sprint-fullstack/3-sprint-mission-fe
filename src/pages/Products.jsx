import Footer from "../components/common/footer";
import Nav from "../components/common/Nav";
import BestProductContainer from "../components/products/BestProductContainer";
import styled from "styled-components";
import ProductsContainer from "../components/products/ProductsContainer";
import useScreenWidth from "../hooks/useScreenWidth";
import { MEDIA_QUERY } from "../constants/mediaQuery";

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContainer = styled.div`
  width: 120rem;
  ${(props) => props.theme.media.medium} {
    max-width: 69.6rem;
  }
  ${(props) => props.theme.media.small} {
    max-width: 34.4rem;
  }
`;

const NavLink = styled.a`
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.color.mainCharcoal};
  font-weight: 700;
  ${(props) => props.theme.media.small} {
    font-size: 1.6rem;
  }
`;

function Products() {
  const screenWidth = useScreenWidth();

  return (
    <MainContainer>
      <Nav screenWidth={screenWidth}>
        <NavLink href="/">자유게시판</NavLink>
        <NavLink href="/">중고마켓</NavLink>
      </Nav>
      <PageContainer>
        <BestProductContainer screenWidth={screenWidth} />
        <ProductsContainer screenWidth={screenWidth} />
      </PageContainer>
      <Footer />
    </MainContainer>
  );
}

export default Products;
