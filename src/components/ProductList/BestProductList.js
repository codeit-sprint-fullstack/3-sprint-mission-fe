import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
// import { getProductList } from '../../apis/ProductService';
import { getProductList } from '../../apis/ProductService(MongoDB)';
import styles from './BestProductList.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';

const BestProductList = () => {
  const [products, setProducts] = useState([]);

  // 화면 크기에 따른 열 개수 및 limit 설정
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isTablet = useMediaQuery('(min-width:744px) and (max-width:1199.98px)');
  const isMobile = useMediaQuery('(max-width:743px)');

  const columns = isDesktop ? 4 : isTablet ? 2 : 1;
  const limit = columns; // limit을 columns와 동일하게 설정

  useEffect(() => {
    // API에서 데이터 가져오기 - limit을 동적으로 전달
    getProductList(0, limit, 'favorite', '') // offset = 0으로 설정하여 첫 페이지만 로드
      .then(data => {
        setProducts(data.products); // API 응답에서 'products'를 사용
      })
      .catch(error => {
        console.error(error);
      });
  }, [limit]); // limit이 변경될 때마다 호출

  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default BestProductList;
