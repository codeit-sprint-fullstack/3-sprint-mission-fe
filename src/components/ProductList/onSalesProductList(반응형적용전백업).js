import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getProductList } from '../../apis/ProductService';
import Pagination from '../Pagination/Pagination';
import styles from './onSalesProductList.module.css';

const OnSalesProductList = ({ orderBy = 'recent', keyword }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getProductList(page, pageSize, orderBy, keyword)
      .then(data => {
        setProducts(data.list);
        setTotalPages(Math.ceil(data.totalCount / pageSize)); // 총 페이지 수 설정
      })
      .catch(error => {
        console.error(error);
      });
  }, [page, pageSize, orderBy, keyword]);

  return (
    <>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} size="small" />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
};

export default OnSalesProductList;