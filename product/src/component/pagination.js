import React from "react";
import './pagination.css';


function Pagination({
    currentPage,
    totalPages,
    pagesCount,
    onPageChange,
    onPrevPage,
    onNextPage,
}) {
    const startPage = pagesCount * 5 +1;
    const endPage = Math.min(startPage+4, totalPages);

    const pages=[];
    for (let i = startPage; i <= endPage; i++){
        pages.push(i);
    }

    return (
        <div className="pagination">
            <button onClick={onPrevPage} disabled={pagesCount === 0}>
                &lt;
            </button>
            {pages.map((page) => {
                <button key={page} onClick = { () => onPageChange(page)} className={page === currentPage ? "active" : ""}>
                    {page}
                </button>
            })}
            <button onClick={onNextPage} disabled={(pagesCount + 1 ) * 5 >=totalPages}>
                &gt;
            </button>
        </div>
    );
}



export default Pagination;