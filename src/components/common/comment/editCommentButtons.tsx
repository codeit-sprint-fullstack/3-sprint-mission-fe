import CommonBtn from '@/components/common/commonBtn/commonBtn';

export default function EditCommentButtons({
  onCancel,
  onSubmit,
}: {
  onCancel: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className='flex gap-6'>
      <button onClick={onCancel}>취소</button>
      <CommonBtn
        className='w-[120px]'
        onClick={onSubmit}
      >
        수정하기
      </CommonBtn>
    </div>
  );
}
