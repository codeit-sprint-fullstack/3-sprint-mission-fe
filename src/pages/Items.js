import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Items.module.css'
// import BestProductList from '../components/ProductList/BestProductList';
import OnSalesProductList from '../components/ProductList/onSalesProductList';

function Items() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [orderBy, setOrderBy] = useState('recent');
  const [finalKeyword, setFinalKeyword] = useState('');

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };

  const handleSearchSubmit = () => {
    setFinalKeyword(searchKeyword); // 검색 버튼을 눌렀을 때 최종 검색어 업데이트
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* <div className={styles.bestItem}>
          <div className={styles.title}>베스트 상품</div>
          <div>
            <BestProductList />
          </div>
        </div> */}
        <div className={styles.onSales}>
          <div className={styles.topBar}>
            <div className={styles.title}>판매 중인 상품</div>
            <div className={styles.toolBox}>
              <div className={styles.searchBox}>
                <input className={styles.search} type='search' placeholder='검색할 상품을 입력해주세요' value={searchKeyword} onChange={handleSearchChange}
                  onKeyDown={handleKeyDown} />
                <img className={styles.searchLogo} src='static/images/search.png' alt='search' onClick={handleSearchSubmit} />
              </div>
              <Link to="/registration"><div className={styles.regist}>상품 등록하기</div></Link>
              <div>
                <label htmlFor="order"></label>
                <select className={styles.select} name="order" id="order" value={orderBy} onChange={handleOrderChange}>
                  <option value="recent">최신순</option>
                  <option value="favorite">좋아요순</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <OnSalesProductList keyword={finalKeyword} orderBy={orderBy} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Items;