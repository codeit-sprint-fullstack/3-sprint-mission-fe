import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getProductList } from '../../apis/ProductService';
import styles from './BestProductList.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';

const BestProductList = () => {
  const [products, setProducts] = useState([]);

  // 화면 크기에 따른 열 개수 및 pageSize 설정
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isTablet = useMediaQuery('(min-width:744px) and (max-width:1199.98px)');
  const isMobile = useMediaQuery('(max-width:743px)');

  const columns = isDesktop ? 4 : isTablet ? 2 : 1;
  const pageSize = columns; // 화면 크기에 맞춰 pageSize를 columns와 동일하게 설정

  console.log('Desktop:', isDesktop);
  console.log('Tablet:', isTablet);
  console.log('Mobile:', isMobile);

  useEffect(() => {
    // API에서 데이터 가져오기 - pageSize를 동적으로 전달
    getProductList(1, pageSize, 'favorite', '')
      .then(data => {
        setProducts(data.list);
      })
      .catch(error => {
        console.error(error);
      });
  }, [pageSize]); // pageSize가 변경될 때마다 호출

  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BestProductList;