import { useState } from "react";
import styles from "@/styles/pages/ArticlePost.module.css";
import { getArticles, postArticle } from "@/lib/pandaMarketApiService";
import { useRouter } from "next/router";

function ArticlePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleValid, setTitleValid] = useState(false);
  const [contentValid, setContentValid] = useState(false);

  const postHandler = async () => {
    try {
      if (title !== "" && content !== "") {
        const response = await postArticle(title, content);
        console.log("response : ", response);

        setTitle('');
        setContent('');
      }
      // 게시물 등록하면서 이동위해 최신 게시글 id를 받아오기
      const toMoveArticle = await getArticles(0, 1, 'recent');
      const toMoveArticleID = toMoveArticle.article[0].id;

      router.push(`/article-detail/${toMoveArticleID}`);
    } catch (error) {
      console.error("Error posting article:", error);
    }
  }

  const titleValidHandler = () => {
    if (title === "") {
      setTitleValid(true);
    } else {
      setTitleValid(false);
    }
  };

  const contentValidHandler = () => {
    if (content === "") {
      setContentValid(true);
    } else {
      setContentValid(false);
    }
  };

  return (
    <div className={styles.ArticlePostContent}>
      <div className={styles.articlePostBox}>
        <div className={styles.articlePostHeader}>
          <h1 className={styles.articlePostHeaderTitle}>
            게시글 쓰기
          </h1>
            <button
              onClick={postHandler}
              className={
                `${styles.articlePostBoutton} ${title !== "" && content !== "" ? styles.postBouttonBlue : ""}`}
            >
              등록
            </button>
        </div>
        <div className={styles.articlePostTitleBox}>
          <h2 className={styles.articlePostInputName}>*제목</h2>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={titleValidHandler}
            onClick={() => {
              setContentValid(false)
            }}
            className={`${styles.inputTitle} ${titleValid ? styles.inputValidBox : ""}`}
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
          />
          {titleValid ?
            <div className={styles.inputValidText}>
              제목을 입력해주세요
            </div>
            : null
          }

        </div>
        <div className={styles.articlePostContentBox}>
          <h2 className={styles.articlePostInputName}>*내용</h2>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={contentValidHandler}
            onClick={() => {
              setTitleValid(false)
            }}
            className={`${styles.textareaContent} ${contentValid ? styles.inputValidBox : ""}`}
            placeholder="내용을 입력해주세요"
            id="message"
            name="message"
            rows="4"
            cols="50" />

          {contentValid ?
            <div className={styles.inputValidText}>
              내용을 입력해주세요
            </div>
            : null
          }

        </div>
      </div>
    </div>
  )
}

export default ArticlePost;
