import CommonBtn from "@/components/common/button/CommonBtn";

const CommentInput = () => {
  return (
    <div className="mb-10">
      <h3 className="mb-2 font-semibold">댓글달기</h3>
      <textarea
        name=""
        id=""
        placeholder="댓글을 입력해주세요."
        className="mb-3 h-[100px] w-full resize-none rounded-xl bg-gray-light px-6 py-4"
      />
      <div className="flex justify-end">
        <CommonBtn disabled={true}>등록</CommonBtn>
      </div>
    </div>
  );
};

export default CommentInput;
