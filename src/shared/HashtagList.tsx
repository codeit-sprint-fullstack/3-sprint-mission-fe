import styled from 'styled-components';
import X_Icon from '../assets/images/icons/close/ic-X.svg';

type HashtagListProps = {
  hashtags?: string[];
  onRemove: (hashtag: string) => void;
};

const HashtagList = ({ hashtags, onRemove }: HashtagListProps) => {
  return (
    <Ul>
      {hashtags?.map((hashtag) => (
        <li key={hashtag}>
          #{hashtag} <RemoveTagButton onClick={() => onRemove(hashtag)} />
        </li>
      ))}
    </Ul>
  );
};

export default HashtagList;

const RemoveTagButton = styled.button`
  background: url(${X_Icon}) no-repeat;
  background-size: cover;
  width: 2.2rem;
  height: 2.4rem;
  margin-left: 0.8rem;
  cursor: pointer;
  border: none;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  list-style: none;
  li {
    display: flex;
    align-items: center;
    background-color: var(--hashTag-bg-color);
    border-radius: 2.6rem;
    padding: 0.6rem 1.2rem 0.6rem 1.6rem;
    font-size: 1.6rem;
  }
`;
