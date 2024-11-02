import React from "react";
import './pagination.css';
import  LeftArrow from '../image/left.png';
import  RightArrow from '../image/right.png';

const PaginationBar = ({ pageNum, setPageNum, totalPage }) => {
  
    const startPage = Math.max(1, Math.min(pageNum - 2, totalPage -4));
    const endPage = Math.min(totalPage, startPage + 4);
    const paginationArr = Array.from (
      {length: endPage - startPage + 1},
      (_, index) => startPage + index
    );

    const handlePrevPage = () => {
      if (pageNum > 1) setPageNum(pageNum - 1);
    }

    const handleNextPage = () => {
      if (pageNum < totalPage) setPageNum(pageNum + 1);
    }
  
    return (
      <div className="pagination">
        <button
          className="pagination"
          onClick={handlePrevPage}
        >
          <img src={LeftArrow} alt="LeftArrow"/>
        </button>
        {paginationArr.map((page) => (
          <button
            key={page}
            className={`pagination ${
              pageNum === page ? "active" : ""
            }`}
            onClick={() => setPageNum(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="pagination"
          onClick={handleNextPage}
        >
          <img src={RightArrow} alt="RightArrow"/>
        </button>
      </div>
    );
  };
  
  export default PaginationBar;
  