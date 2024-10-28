import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getProductList } from '../../apis/ProductService';
import Pagination from '../Pagination/Pagination';
import styles from './onSalesProductList.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';


const OnSalesProductList = ({ orderBy = 'recent', keyword }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 화면 크기에 따른 열 개수 및 pageSize 설정
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1199px)');
  const isMobile = useMediaQuery('(max-width:767px)');

  const columns = isDesktop ? 5 : isTablet ? 3 : 2;
  const pageSize = columns * 2; // 화면 크기에 맞춰 pageSize를 columns와 동일하게 설정

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