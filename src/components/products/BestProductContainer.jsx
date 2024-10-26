import styled from "styled-components";
import Product from "./Product";
import { useEffect, useMemo, useState } from "react";
import { getProductList } from "../../apis/ProductService";
import PropTypes from "prop-types";

const BestProductSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2.6rem;
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.color.subBlack};
    margin-bottom: 1.5rem;
    line-height: 3.2rem;
    font-weight: 700;
  }
`;

const BestProductsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`;

function BestProductContainer({ screenWidth }) {
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pageSize = useMemo(() => {
    if (screenWidth > 1199) return 4;
    if (screenWidth > 744) return 2;
    return 1;
  }, [screenWidth]);

  useEffect(() => {
    const fetchBestProductsList = async () => {
      try {
        setLoading(true);
        setError(null);
        const { list } = await getProductList({ page: 1, pageSize, orderBy: "favorite" });
        setBestProducts(list);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBestProductsList();
  }, [pageSize]);

  return (
    <>
      <BestProductSection>
        <h1>베스트 상품</h1>
        <BestProductsContainer>
          {/* 로딩,에러 핸들 구현 예정 */}
          {loading && <div>로딩중...</div>}
          {error && <div>에러 발생</div>}
          {!loading &&
            !error &&
            bestProducts.map((bestProduct) => {
              const props = {
                title: bestProduct.name,
                price: bestProduct.price,
                likes: bestProduct.favoriteCount,
                image: bestProduct.images[0],
                best: true,
              };
              return <Product key={bestProduct.id} {...props} />;
            })}
        </BestProductsContainer>
      </BestProductSection>
    </>
  );
}

export default BestProductContainer;

BestProductContainer.propTypes = {
  screenWidth: PropTypes.number,
};
