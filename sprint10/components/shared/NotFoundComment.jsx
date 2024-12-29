import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/shared/NotFoundComment.module.css";

function NotFoundComment({ type }) {
  const [srcString, setSrcString] = useState("");
  const [altString, setAltString] = useState("");
  const [contentText, setContentText] = useState("");

  useEffect(() => {
    switch (type) {
      case "comment":
        setSrcString("/images/default/None_comments_Img.png");
        setAltString("댓글이 없을 때 나오는 이미지");
        setContentText(`아직 댓글이 없어요, \n지금 댓글을 달아보세요!`);
        break;
      case "question":
        setSrcString("/images/default/None_Questions_Img.png");
        setAltString("문의가 없을 때 나오는 이미지");
        setContentText("아직 문의가 없어요");
        break;
    }
  }, [type]);

  if (!srcString || !altString || !contentText) {
    return null;
  }

  return (
    <div className={styles.noneCommentsBox}>
      <div
        className={styles.noneCommentsImage}
        style={{
          position: "relative",
        }}
      >
        <Image
          src={srcString}
          alt={altString}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <p className={styles.noneCommentsText}>
        {contentText.split('\n').map((line, index) => (
          <p key={index}>
            {line}
            < br />
          </p>
        ))}
      </p>
    </div>
  )
}

export default NotFoundComment;
