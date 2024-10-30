import styled from "styled-components";
import Product from "./Product";
import PropTypes from "prop-types";
import PROP_VALUES from "../../constants/propValues";
import RefreshButton from "../common/RefreshButton";

const ProductsContainerComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4rem;
  gap: 2.3rem;
  ${(props) => props.theme.media.medium} {
    gap: 1.6rem;
  }
  ${(props) => props.theme.media.small} {
    gap: 0.8rem;
  }
`;

function ProductsContainer({ products, loading, error, size, refetch }) {
  return (
    <ProductsContainerComponent>
      {/* 로딩,에러 핸들 구현 예정 */}
      {error && <RefreshButton refetch={refetch} />}
      {!loading &&
        !error &&
        products.map((product) => {
          const props = {
            title: product.name,
            price: product.price,
            likes: product.favoriteCount,
            image: product.images[0],
            size,
          };
          return <Product key={product.id} {...props} />;
        })}
    </ProductsContainerComponent>
  );
}

export default ProductsContainer;

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.oneOf([PROP_VALUES.product.big, PROP_VALUES.product.small]),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  refetch: PropTypes.func,
};
