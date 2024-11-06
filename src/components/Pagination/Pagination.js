import React, { useState } from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange, itemsPerPage }) => {
  const [currentGroup, setCurrentGroup] = useState(0); // 현재 페이지 그룹
  const pagesPerGroup = 5; // 한 그룹당 표시할 페이지 수

  const handlePreviousGroup = () => {
    if (currentGroup > 0) {
      const newGroup = currentGroup - 1;
      setCurrentGroup(newGroup);
      const newOffset = (newGroup * pagesPerGroup + pagesPerGroup - 1) * itemsPerPage;
      onPageChange(newOffset); // 이전 그룹의 마지막 페이지의 offset으로 이동
    }
  };

  const handleNextGroup = () => {
    if ((currentGroup + 1) * pagesPerGroup < totalPages) {
      const newGroup = currentGroup + 1;
      setCurrentGroup(newGroup);
      const newOffset = newGroup * pagesPerGroup * itemsPerPage;
      onPageChange(newOffset); // 다음 그룹의 첫 번째 페이지의 offset으로 이동
    }
  };

  const handlePageClick = (pageNumber) => {
    console.log(`Current Page: ${currentPage}, Clicked Page: ${pageNumber}, itemsPerPage: ${itemsPerPage}`);
    if (pageNumber !== currentPage) { // 현재 페이지와 다른 경우에만 실행
      const newOffset = (pageNumber - 1) * itemsPerPage;
      console.log(`Page clicked: ${pageNumber}, New offset: ${newOffset}`);
      onPageChange(newOffset);
    }
  };


  const renderPageNumbers = () => {
    const startPage = currentGroup * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

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
      <button
        className={`${styles.arrowButton} ${styles.right}`}
        onClick={handleNextGroup}
        disabled={(currentGroup + 1) * pagesPerGroup >= totalPages}
      ></button>
    </div>
  );
};

export default Pagination;
