import styled from "styled-components";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formatter from "../../utils/formatter";
import PROP_VALUES from "../../constants/propValues.ts";
import { ProductSize } from "../../types/options.ts";

interface ISizeProp {
  $size: ProductSize;
}

interface IProductProps {
  title: string;
  price: number;
  likes: number;
  image: string;
  size: ProductSize;
}

const ProductContainer = styled.div<ISizeProp>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$size === PROP_VALUES.product.big ? "28.2rem" : "22.1rem")};
  ${(props) => props.theme.media.small} {
    width: ${(props) => (props.$size === PROP_VALUES.product.big ? "28.2rem" : "16.8rem")};
  }
`;

const ImageContainer = styled.div<ISizeProp>`
  border-radius: 1.6rem;
  width: 100%;
  height: ${(props) => (props.$size === PROP_VALUES.product.big ? "28.2rem" : "22.1rem")};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  ${(props) => props.theme.media.small} {
    height: ${(props) => (props.$size === PROP_VALUES.product.big ? "28.2rem" : "16.8rem")};
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.6rem;
  color: ${(props) => props.theme.color.mainBlack};
  p:nth-of-type(1) {
    line-height: 2.4rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
  p:nth-of-type(2) {
    line-height: 2.6rem;
    font-size: 1.6rem;
    font-weight: 700;
  }
  div {
    line-height: 1.8rem;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.527rem;
    img {
      width: 1.34rem;
    }
  }
`;

function Product({ title, price, likes, image, size = PROP_VALUES.product.small }: IProductProps) {
  return (
    <>
      <ProductContainer $size={size}>
        <ImageContainer $size={size}>
          {/* 이미지 임시 처리 */}
          <img src="https://nomadlee.com/wp-content/uploads/2024/09/16.webp" alt={title} />
        </ImageContainer>
        <TextContainer>
          <p>{title}</p>
          <p>{formatter.formatNumber(price)}원</p>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            {/* 이후 구현 예정 */}
            {/* <div>{formatter.formatNumber(likes)}</div> */}
          </div>
        </TextContainer>
      </ProductContainer>
    </>
  );
}

export default Product;
