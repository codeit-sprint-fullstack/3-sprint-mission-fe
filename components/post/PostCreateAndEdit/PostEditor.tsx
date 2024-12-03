"use client";

import { usePathname } from "next/navigation";
import PostEditorTitle from "./PostEditorTitle";
import CommonBtn from "@/components/common/button/CommonBtn";

const PostEditor = () => {
  const pathname = usePathname();
  const urlPath = pathname.split("/")[2];

  const title = urlPath === "create" ? "게시글 쓰기" : "게시글 수정";
  const btnText = urlPath === "create" ? "등록" : "수정";

  return (
    <article className="mx-auto max-w-[1200px]">
      <header className="mb-8 flex w-full items-center justify-between">
        <PostEditorTitle>{title}</PostEditorTitle>
        <CommonBtn disabled={true}>{btnText}</CommonBtn>
      </header>
      <section>
        <div className="mb-6">
          <h2 className="text-lg font-bold">*제목</h2>
          <input
            type="text"
            className="w-full rounded-xl bg-gray-light px-6 py-4"
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">*내용</h2>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="w-full resize-none rounded-xl bg-gray-light px-6 py-4"
            placeholder="내용을 입력해주세요"
          />
        </div>
      </section>
    </article>
  );
};

export default PostEditor;
