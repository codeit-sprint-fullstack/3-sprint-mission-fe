import React, { useState } from 'react';
import LikeButtonWithCount from './LikeButtonWithCount';
import styled from 'styled-components';
import Default_Image from '../../assets/images/default/img_default.png';

type ProductCardProps = {
  item: {
    id: number;
    images: string[]; // 이미지 URL 배열로 되어있는 의도가 무엇이지?
    description: string;
    favoriteCount: number;
    name: string;
    price: number;
  };
  type: 'best' | 'normal';
};

const ProductCard = ({ item, type }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  if (!item) return null;

  const onLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  const image =
    item.images[0] === 'https://example.com/...'
      ? Default_Image
      : item.images[0];

  return (
    <>
      <ProductCardList key={item.id}>
        <ProductImage
          src={image ?? Default_Image}
          alt={item.description}
          type={type}
        />

        <ProductName>{item.name}</ProductName>
        <ProductPrice>{formatNumberWithCommas(item.price)}원</ProductPrice>
        <LikeButtonWithCount
          isLiked={isLiked}
          likeCount={item.favoriteCount}
          onLikeToggle={onLikeToggle}
        />
      </ProductCardList>
    </>
  );
};

export default ProductCard;

const ProductCardList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;

const ProductImage = styled.img<{ type: 'best' | 'normal' }>`
  width: ${(props) => (props.type === 'best' ? '28rem' : '22rem')};
  height: ${(props) => (props.type === 'best' ? '28rem' : '22rem')};
  border-radius: 1.6rem;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: ${(props) => props.type === 'best' && '34.3rem'};
    height: ${(props) => props.type === 'best' && '34.3rem'};
  }

  @media (max-width: 768px) {
    width: ${(props) => props.type === 'normal' && '16.8rem'};
    height: ${(props) => props.type === 'normal' && '16.8rem'};
  }
`;

const ProductName = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const ProductPrice = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;

const formatNumberWithCommas = (number: number) => {
  return number.toLocaleString();
};
