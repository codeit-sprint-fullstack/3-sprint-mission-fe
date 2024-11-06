import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
// import { getProductList } from '../../apis/ProductService';
import { getProductList } from '../../apis/ProductService(MongoDB)';
import Pagination from '../Pagination/Pagination';
import styles from './onSalesProductList.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';


const OnSalesProductList = ({ orderBy = 'recent', keyword }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 화면 크기에 따른 열 개수 및 pageSize 설정
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isTablet = useMediaQuery('(min-width:744px) and (max-width:1199.98px)');
  const isMobile = useMediaQuery('(max-width:743px)');

  let columns;

  if (isDesktop) {
    columns = 5;
  } else if (isTablet) {
    columns = 3;
  } else if (isMobile) {
    columns = 2;
  }

  const pageSize = columns * 2; // 화면 크기에 맞춰 pageSize를 columns에 맞게 설정


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
          <ProductCard key={product._id} product={product} size="small" />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
};

export default OnSalesProductList;