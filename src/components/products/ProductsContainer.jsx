import styled from "styled-components";
import Select from "../common/Select";
import { useEffect, useMemo, useState } from "react";
import { getProductList } from "../../apis/ProductService";
import Product from "./Product";
import Button from "../common/Button";
import { useAtom } from "jotai";
import productSortByState from "../../jotai/atoms/productSortByState";
import { PRODUCT_SORTING } from "../../constants/options";
import PageIndex from "../common/PageIndex";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = styled.input`
  padding: 0.9rem 2rem 0.9rem 3.5rem;
  border-radius: 1.2rem;
  width: 32.5rem;
  height: 4.5rem;
  ::placeholder {
    font-size: 1.6rem;
    color: ${(props) => props.theme.color.mainGrey};
    line-height: 2.4rem;
    font-weight: 400;
  }
  ${(props) => props.theme.media.medium} {
    width: 24.2rem;
  }
  ${(props) => props.theme.media.small} {
    max-width: 22rem;
  }
`;

const ProductsBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 4rem;
  margin-bottom: 2.4rem;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 4.5rem;
  }
  /* ${(props) => props.theme.media.small} {
    gap: 0.8rem;
  } */
`;

const InputContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 1.5rem;
    top: 1.5rem;
  }
`;

const ProductButtonsContainer = styled.div`
  gap: 1.2rem;
  display: flex;
  flex-wrap: wrap;
`;

const ProductsContainerComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 14rem;
  gap: 2.3rem;
  ${(props) => props.theme.media.medium} {
    gap: 1.6rem;
  }
  ${(props) => props.theme.media.small} {
    gap: 0.8rem;
  }
`;

function ProductsContainer({ screenWidth }) {
  const [productSorting, setProductSorting] = useAtom(productSortByState);
  const options = ["최신순", "좋아요순"];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = useMemo(() => {
    if (screenWidth > 1199) return 10;
    if (screenWidth > 744) return 6;
    return 4;
  }, [screenWidth]);

  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        setLoading(true);
        setError(null);
        const { list } = await getProductList({
          page,
          pageSize,
          keyword: searchKeyword,
          orderBy: PRODUCT_SORTING[productSorting],
        });
        setProducts(list);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductsList();
  }, [productSorting, searchKeyword, pageSize, page]);

  return (
    <>
      <ProductsBar>
        <h1>판매 중인 상품</h1>
        <ProductButtonsContainer>
          <InputContainer>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="검색할 상품을 입력해주세요"
            ></Input>
            <FontAwesomeIcon
              style={{ cursor: "pointer", color: "#9CA3AF" }}
              onClick={() => setSearchKeyword(inputValue)}
              icon={faMagnifyingGlass}
            />
          </InputContainer>
          <Button $size="13.3rem">상품 등록하기</Button>
          <Select
            {...{
              selectedOption: productSorting,
              setOption: setProductSorting,
              options,
              screenWidth,
            }}
          ></Select>
        </ProductButtonsContainer>
      </ProductsBar>
      <ProductsContainerComponent>
        {/* 로딩,에러 핸들 구현 예정 */}
        {!loading &&
          !error &&
          products.map((product) => {
            const props = {
              title: product.name,
              price: product.price,
              likes: product.favoriteCount,
              image: product.images[0],
              best: false,
            };
            return <Product key={product.id} {...props} />;
          })}
        <PageIndex page={page} setPage={setPage} />
      </ProductsContainerComponent>
    </>
  );
}

export default ProductsContainer;

ProductsContainer.propTypes = {
  screenWidth: PropTypes.number,
};
