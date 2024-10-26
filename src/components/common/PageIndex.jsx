import styled from "styled-components";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

function PageIndex({ page, setPage }) {
  const pageGroup = Math.floor((page - 1) / 5);
  const start = pageGroup * 5 + 1;
  const array = Array.from({ length: 5 }, (_, index) => start + index);

  return (
    <ButtonsContainer>
      <CircleButton onClick={() => setPage(Math.max(page - 5, 1))}>
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
      <CircleButton onClick={() => setPage(page + 5)}>
        <FontAwesomeIcon icon={faAngleRight} />
      </CircleButton>
    </ButtonsContainer>
  );
}

export default PageIndex;

PageIndex.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
};
