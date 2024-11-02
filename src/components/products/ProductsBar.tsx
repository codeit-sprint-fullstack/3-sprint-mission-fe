import styled from "styled-components";
import Select from "../common/Select";
import { useAtom, useSetAtom } from "jotai";
import productSortByState from "../../jotai/atoms/productSortByState";
import PRODUCT_SORT_BY from "../../constants/productSortBy";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MEDIA_QUERY } from "../../constants/mediaQuery";
import { useState } from "react";
import productSearchKeywordState from "../../jotai/atoms/productSearchKeywordState";
import { ScreenWidth } from "../../types/options";
import { useNavigate } from "react-router-dom";

interface IProductsBarProps {
  screenWidth: ScreenWidth;
}

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

const ProductsBarContainer = styled.div`
  width: 100%;
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

const RegisterButton = styled.button`
  width: 13.3rem;
  height: 4.5rem;
`;

function ProductsBar({ screenWidth }: IProductsBarProps) {
  const [productSortBy, setProductSortBy] = useAtom(productSortByState);
  const setProductSearchKeyword = useSetAtom(productSearchKeywordState);
  const [searchInputValue, setSearchInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <ProductsBarContainer>
      <h1>판매 중인 상품</h1>
      <ProductButtonsContainer>
        <InputContainer>
          <Input
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            placeholder="검색할 상품을 입력해주세요"
          ></Input>
          <FontAwesomeIcon
            style={{ cursor: "pointer", color: "#9CA3AF" }}
            onClick={() => setProductSearchKeyword(searchInputValue)}
            icon={faMagnifyingGlass}
          />
        </InputContainer>
        <RegisterButton onClick={() => navigate("/registration")}>상품 등록하기</RegisterButton>
        <Select
          {...{
            selectedOption: PRODUCT_SORT_BY[productSortBy].string,
            setOption: setProductSortBy,
            optionsString: [PRODUCT_SORT_BY.recent.string, PRODUCT_SORT_BY.favorite.string],
            optionsValue: [PRODUCT_SORT_BY.recent.parameter, PRODUCT_SORT_BY.favorite.parameter],
            screenWidth,
          }}
        ></Select>
      </ProductButtonsContainer>
    </ProductsBarContainer>
  );
}

export default ProductsBar;

ProductsBar.propTypes = {
  screenWidth: PropTypes.oneOf(Object.values(MEDIA_QUERY.value)),
};
