import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/shared/Comments.module.css";
import formatDate from "@/lib/formatDate";
import EditDeletMenu from "@/components/ArticleDetail/EditDeletMenu";
import PatchCommentBox from "@/components/shared/PatchCommentBox";

function Comments({
  comment,
  handleDeleteComment,
  setTextareaValue,
  submitHandler }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [patchComment, setPatchComment] = useState(false);
  const { image, nickname } = comment.writer || { image: '', nickname: 'Anonymous' };

  return (
    <div className={styles.commentsBox}>
      {patchComment ?
        <PatchCommentBox
          textareaValue={comment.content}
          setTextareaValue={setTextareaValue}
          submitHandler={submitHandler}
          setPatchComment={setPatchComment}
        /> :
        <div className={styles.commentsHeader}>
          <h2 className={styles.comments}>
            {comment.content}
          </h2>
          <div
            onClick={() => { setToggleMenu(!toggleMenu) }}
            className={styles.togleMenuMark}
          >
            ⋮
          </div>
          {toggleMenu ?
            <EditDeletMenu
              onToggleMenu={setToggleMenu}
              commentId={comment.id}
              handleDeleteComment={handleDeleteComment}
              setPatchComment={setPatchComment} />
            : null}
        </div>}
      <div className={styles.commentsMetaData}>
        <div
          className={styles.profileImage}
          style={{
            position: "relative",
          }}
        >
          <Image
            fill
            src={!image ? "/images/icons/ic_profile_big.png" :
              image
            }
            alt="프로필 이미지"
          />
        </div>
        <div className={styles.metaDataSmallBox}>
          <div className={styles.nickname}>
            {!nickname ? 똑똑한판다 : nickname}
          </div>
          <div className={styles.date}>{formatDate(comment.createdAt)}</div>
        </div>
      </div>
    </div>
  )
}

export default Comments;
