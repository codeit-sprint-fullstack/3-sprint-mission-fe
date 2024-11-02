import React from 'react';

import styled from 'styled-components';
import heartInactive from '../../assets/images/icons/heart/heart-inactive.svg';
import heartActive from '../../assets/images/icons/heart/heart-active.svg';

type LikeButtonWithCountProps = {
  isLiked: boolean;
  likeCount: number;
  onLikeToggle: () => void;
};

function LikeButtonWithCount({
  isLiked,
  likeCount,
  onLikeToggle,
}: LikeButtonWithCountProps) {
  return (
    <LikeContainer>
      {isLiked ? (
        <LikeButton
          src={heartActive}
          alt="좋아요 누름"
          onClick={onLikeToggle}
        />
      ) : (
        <LikeButton
          src={heartInactive}
          alt="좋아요 안누름"
          onClick={onLikeToggle}
        />
      )}
      <LikeCount>{likeCount}</LikeCount>
    </LikeContainer>
  );
}

export default LikeButtonWithCount;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LikeButton = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

const LikeCount = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;
