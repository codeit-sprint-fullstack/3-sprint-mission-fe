import styled from "styled-components";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formatter from "../../utils/formatter";
import PropTypes from "prop-types";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.2rem;
  gap: 1.6rem;
`;

const ImageContainer = styled.div`
  border-radius: 1.6rem;
  width: ${(props) => (props.$best ? "28.2rem" : "22.1rem")};
  height: ${(props) => (props.$best ? "28.2rem" : "22.1rem")};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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

function Product({ title, price, likes, image, best = false }) {
  return (
    <>
      <ProductContainer>
        <ImageContainer $best={best}>
          <img src={image} alt={title} />
        </ImageContainer>
        <TextContainer>
          <p>{title}</p>
          <p>{formatter.formatNumber(price)}원</p>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <div>{formatter.formatNumber(likes)}</div>
          </div>
        </TextContainer>
      </ProductContainer>
    </>
  );
}

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  likes: PropTypes.number,
  image: PropTypes.string,
  best: PropTypes.bool,
};

export default Product;
