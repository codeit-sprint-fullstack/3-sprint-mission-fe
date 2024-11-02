import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { getBestProducts } from '../../services/ProductService';
import { Items } from './ProductsForSale';

const BestProducts = () => {
  const [items, setItems] = useState<Items>();
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    // 화면 크기에 따라 pageSize 조정
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width > 1024) setPageSize(4);
      else if (width > 768) setPageSize(2);
      else setPageSize(1);
    };

    updatePageSize(); // 초기 pageSize 설정
    window.addEventListener('resize', updatePageSize); // 화면 리사이즈 시 업데이트

    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getBestProducts(pageSize);
      if (data) {
        setItems(data);
      }
    };

    fetchItems();
  }, [pageSize]);

  if (!items) return null;

  return (
    <BestProductsContainer>
      <ProductTitle>베스트 상품</ProductTitle>
      <Ul>
        {items.list.map((item) => (
          <ProductCard key={item.id} item={item} type="best" />
        ))}
      </Ul>
    </BestProductsContainer>
  );
};

export default BestProducts;

const BestProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

const Ul = styled.ul`
  display: flex;
  gap: 2.4rem;
`;
