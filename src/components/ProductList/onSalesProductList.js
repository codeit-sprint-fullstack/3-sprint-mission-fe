import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
// import { getProductList } from '../../apis/ProductService';
import { getProductList } from '../../apis/ProductService(MongoDB)';
import Pagination from '../Pagination/Pagination';
import styles from './onSalesProductList.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';

const OnSalesProductList = ({ orderBy = 'recent', keyword }) => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // 화면 크기에 따른 열 개수 및 limit 설정
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

  const limit = columns * 2; // limit 설정

  useEffect(() => {
    console.log(`Fetching products with offset: ${offset} and limit: ${limit}`);
    getProductList(offset, limit, orderBy, keyword)
      .then(data => {
        setProducts(data.products); // API 응답이 'products'로 되어 있음
        setTotalPages(Math.ceil(data.totalCount / limit)); // 총 페이지 수 설정
      })
      .catch(error => {
        console.error(error);
      });
  }, [offset, limit, orderBy, keyword]);

  // 페이지 변경 함수
  const handlePageChange = (newOffset) => {
    if (newOffset !== offset) { // 기존 offset과 다를 때만 업데이트
      console.log(`Updating offset to ${newOffset}`);
      setOffset(newOffset);
    }
  };

  return (
    <>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product._id} product={product} size="small" />
        ))}
      </div>
      <Pagination
        currentPage={Math.floor(offset / limit) + 1}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={limit} // itemsPerPage로 limit 전달
      />
    </>
  );
};

export default OnSalesProductList;
