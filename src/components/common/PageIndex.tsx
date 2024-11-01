import styled from "styled-components";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface IPageIndexProps {
  page: number;
  setPage: (value: number) => void;
}

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 4.3rem;
`;

const CircleButton = styled.button`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.subCharcoal};
  border: 0.1rem solid ${(props) => props.theme.color.anotherIvory};
  &.selected {
    background-color: ${(props) => props.theme.color.mainBlue};
    color: ${(props) => props.theme.color.subIvory};
    border: none;
  }
`;

function PageIndex({ page, setPage }: IPageIndexProps) {
  const PAGE_SIZE = 5;
  const [pageGroup, setPageGroup] = useState(0);
  const start = pageGroup * PAGE_SIZE + 1;
  const array = Array.from({ length: PAGE_SIZE }, (_, index) => start + index);
  const handlePreviousPage = () => {
    setPageGroup((prevValue) => Math.max(prevValue - 1, 0));
  };
  const handleNextPage = () => {
    setPageGroup((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    setPage(start);
  }, [start, setPage]);

  return (
    <ButtonsContainer>
      <CircleButton onClick={handlePreviousPage}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </CircleButton>
      {array.map((number) => (
        <CircleButton
          onClick={() => setPage(number)}
          className={page === number ? "selected" : ""}
          key={number}
        >
          {number}
        </CircleButton>
      ))}
      <CircleButton onClick={handleNextPage}>
        <FontAwesomeIcon icon={faAngleRight} />
      </CircleButton>
    </ButtonsContainer>
  );
}

export default PageIndex;
