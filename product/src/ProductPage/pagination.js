import React from "react";
import './pagination.css';
import Left from '../image/left.png';
import Right from '../image/right.png';

const Pagination = ({ totalPageNum, activePageNum, onPageChange}) => {
    const maxPages = 5;
    let startPage;

    if(totalPageNum <= maxPages){
        startPage = 1;
    }else{
        startPage = Math.max(activePageNum - Math.floor(maxPages / 2), 1);
        startPage = Math.min(startPage, totalPageNum - maxPages + 1);
    }

    const pages = Array.from(
        {length: Math.min(maxPages, totalPageNum - startPage + 1)},
        (_, i) => startPage + i
    );
  

    return (
        <div className="pagination">
            <button className="paginationBtn" 
            disabled={activePageNum === 1} 
            onClick={() => onPageChange(activePageNum -1)}>
                <img src={Left} alt="왼쪽 화살표"/>
            </button>
            {pages.map((page) => {
                 <button
                 key={page}
                 className={`paginationBTn ${
                   activePageNum === page ? "active" : ""
                 }`}
                 onClick={() => onPageChange(page)}
               >
                {page}
                </button>
            })}
             <button
            className="paginationButton"
            disabled={activePageNum === totalPageNum}
            onClick={() => onPageChange(activePageNum + 1)}>
             <img src={Right} alt="오른쪽 화살표"/>
        </button>
        </div>
    )
} 



export default Pagination;