import styled from 'styled-components';
import ARROW_LEFT_INACTIVE from '../../assets/images/icons/arrow/arrow-left-inactive.svg';
import ARROW_LEFT_ACTIVE from '../../assets/images/icons/arrow/arrow-left-active.svg';
import ARROW_RIGHT_INACTIVE from '../../assets/images/icons/arrow/arrow-right-inactive.svg';
import ARROW_RIGHT_ACTIVE from '../../assets/images/icons/arrow/arrow-right-active.svg';

type PaginationProps = {
  pageNo: number;
  setPageNo: (pageNo: number) => void;
  totalPage: number;
};

const Pagination = ({ pageNo, setPageNo, totalPage }: PaginationProps) => {
  const startPage = Math.max(1, Math.min(pageNo - 2, totalPage - 4));
  const endPage = Math.min(totalPage, startPage + 4);
  const paginationArr = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  const handlePrevPage = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  const handleNextPage = () => {
    if (pageNo < totalPage) setPageNo(pageNo + 1);
  };

  return (
    <PaginationContainer className="pagination-container">
      <PageButton className="page-btn" onClick={handlePrevPage}>
        <ArrowButton
          src={pageNo === 1 ? ARROW_LEFT_INACTIVE : ARROW_LEFT_ACTIVE}
        />
      </PageButton>
      {paginationArr.map((value) => (
        <PageButton
          key={value}
          className={value === pageNo ? `page-btn active` : `page-btn`}
          onClick={() => setPageNo(value)}
        >
          {value}
        </PageButton>
      ))}

      <PageButton className="page-btn" onClick={handleNextPage}>
        <ArrowButton
          src={pageNo === totalPage ? ARROW_RIGHT_INACTIVE : ARROW_RIGHT_ACTIVE}
        />
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  width: 30.4rem;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 14rem;
`;

const PageButton = styled.div`
  width: 4rem;
  height: 4rem;
  font-size: 1.6rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  cursor: pointer;

  border: 1px solid var(--pagination-inactive-border-color);
  border-radius: 999px;
  color: var(--pagination-inactive-font-color);

  &.active {
    color: var(--pagination-active-font-color);
    background-color: var(--pagination-active-bg-color);
    border: 1px solid var(--pagination-active-bg-color);
  }
`;

const ArrowButton = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
