import { InputBox } from "@/components/InputBox";
import styles from "@/components/BestPost.module.css";
import { NavLink } from "@/components/Header";
import { useEffect, useState } from "react";
import { FreeboardCreate } from "./api";
import { useRouter } from "next/navigation";

export default function Registration() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleHandle = (e) => {
    setTitle(e.target.value);
  };
  const contentHandle = (e) => {
    setContent(e.target.value);
  };

  function submit(e) {
    e.preventDefault();
    const body = {
      title,
      content,
    };
    FreeboardCreate(body).then((res) => {
      if (res.data === "성공") router.push("/freeboard/List");
    });
  }
  return (
    <>
      <div className={styles.top_inner}>
        <h2 className={styles.title}>게시글 쓰기</h2>
        <NavLink href="/freeboard/Postregistration">
          <button onClick={submit} className={styles.grey_bt}>
            등록
          </button>
        </NavLink>
      </div>
      <InputBox
        title={"*제목"}
        content={"제목을 입력해주세요"}
        height={56}
        onChange={titleHandle}
      />
      <InputBox
        title={"*내용"}
        content={"내용을 입력해주세요"}
        height={280}
        onChange={contentHandle}
      />
    </>
  );
}
