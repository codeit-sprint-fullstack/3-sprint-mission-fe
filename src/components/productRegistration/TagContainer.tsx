import styled from "styled-components";
import XIcon from "../../../public/icons/X.png";
import { useSetAtom } from "jotai";
import { productTagsState } from "../../jotai/atoms/productFormState";
import { MouseEvent } from "react";

const Container = styled.div`
  width: 100%;
  margin-top: 1.4rem;
  display: flex;
  gap: 1.2rem;
`;

const Tag = styled.div`
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.mainIvory};
  border-radius: 2.6rem;
  gap: 0.8rem;
  img {
    width: 2.2rem;
    height: 2.4rem;
    cursor: pointer;
  }
`;

const TagText = styled.div`
  color: ${(props) => props.theme.color.mainBlack};
  font-weight: 400;
  line-height: 2.6rem;
  svg {
  }
`;

function TagContainer({ tags }: { tags: string[] }) {
  const setTags = useSetAtom(productTagsState);
  const handleDeleteTag = (e: MouseEvent) => {
    const targetTag = e?.currentTarget?.closest("div")?.textContent;
    setTags((prevTags) => prevTags.filter((tag) => tag !== targetTag));
  };

  return (
    <Container>
      {tags.map((tag) => {
        return (
          <Tag key={tag}>
            <TagText>{tag}</TagText>
            <img onClick={handleDeleteTag} src={XIcon} />
          </Tag>
        );
      })}
    </Container>
  );
}

export default TagContainer;
