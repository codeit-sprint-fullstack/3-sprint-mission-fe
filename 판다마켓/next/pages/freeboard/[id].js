import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/components/BestPost.module.css";
import { commentCreate } from "./api";

import { InputBox } from "@/components/InputBox";

export default function Board() {
  const router = useRouter();
  const query = router.query;
  const [board, setBoard] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    console.log(query?.id);
    // FreeboardItem(id).then((res) => {
    //   console.log(res);
    // });
  }, []);
  const boardHandle = (e) => {
    setComment(e.target.value);
  };

  function submit(e) {
    e.preventDefault();
    const body = {
      content: comment,
      freeboardId: query.id,
    };
    commentCreate(body).then((res) => {
      console.log(res);
      setComment("");
      setBoard(res.data.data);
    });
  }

  return (
    <>
      <InputBox
        title={"댓글"}
        content={"댓글을 입력해주세요"}
        height={100}
        onChange={boardHandle}
      />
      <button onClick={submit} className={styles.grey_bt}>
        등록
      </button>

      {board.map((v) => {
        return <div>{v.content}</div>;
      })}
    </>
  );
}
