import * as BestBoardModule from '@/components/board/BestBoard/index';

/* 이런식으로 BestBoardModule로 만드는것이 좋은지 아니면 BestBoard -> BestBoardWrapper 로 컴포넌트 이름을 변경하는게 좋을지 고민됨 */

const BestBoard = () => {
  return (
    <>
      <BestBoardModule.Title />
      <BestBoardModule.Content />
    </>
  );
};

export default BestBoard;
