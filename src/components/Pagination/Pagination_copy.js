import React, { useState } from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [currentGroup, setCurrentGroup] = useState(0); // 현재 페이지 그룹

  const pagesPerGroup = 5; // 한 그룹당 표시할 페이지 수

  const handlePreviousGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  const handleNextGroup = () => {
    if ((currentGroup + 1) * pagesPerGroup < totalPages) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const startPage = currentGroup * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages); // 총 페이지 수에 맞게 마지막 페이지 설정

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageNumber} ${currentPage === i ? styles.active : ''}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.arrowButton} onClick={handlePreviousGroup} disabled={currentGroup === 0}></button>
      {renderPageNumbers()}
      <button className={`${styles.arrowButton} ${styles.right}`} onClick={handleNextGroup} disabled={(currentGroup + 1) * pagesPerGroup >= totalPages}></button>
    </div>
  );
};

export default Pagination;