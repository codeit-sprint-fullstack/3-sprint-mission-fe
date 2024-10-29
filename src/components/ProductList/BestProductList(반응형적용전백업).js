import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getProductList } from '../../apis/ProductService';
import styles from './BestProductList.module.css';

const BestProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API에서 데이터 가져오기
    getProductList(1, 4, 'favorite', '')
      .then(data => {
        setProducts(data.list);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BestProductList;