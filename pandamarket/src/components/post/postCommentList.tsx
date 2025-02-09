import styles from "@/components/post/postCommentList.module.css";
import CommentDropdownMenu from "@/components/Dropdown/CommentDropdown";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface Comment {
  id: number;
  content: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <div className={styles.commentListWrapper}>
      {comments.length === 0 ? (
        <div className={styles.emptyReply}>
          <Image
            width={140}
            height={140}
            src="/images/Img_reply_empty.png"
            alt="Reply Empty"
          />
          <div className={styles.none}>
            <span className={styles.noComments}>
              아직 댓글이 없어요, <br /> 지금 댓글을 달아보세요!
            </span>
          </div>
        </div>
      ) : (
        comments.map((comment) => (
          <li key={comment.id} className={styles.commentWrapper}>
            <div className={styles.upperSection}>
              <div className={styles.commentContent}>{comment.content}</div>
              <CommentDropdownMenu
                commentId={comment.id}
                onEdit={(id) => console.log(`Edit comment ${id}`)}
                onDelete={(id) => console.log(`Delete comment ${id}`)}
              />
            </div>
            <div className={styles.aboutWrapper}>
              <Image
                src="/images/userImg.png"
                width={32}
                height={32}
                alt="User image"
                className={styles.userImage}
              />
              <div className={styles.userWrapper}>
                <span className={styles.userName}>똑똑한판다</span>
                <span className={styles.hour}>1시간 전</span>
              </div>
            </div>
            <div>
              <Image
                src="/images/Vector.png"
                width={1200}
                height={1}
                alt="Vector"
              />
            </div>
          </li>
        ))
      )}
      <Link href="/board" className={styles.undo}>
        <button className={styles.backButton}>
          목록으로 돌아가기
          <Image
            width={24}
            height={24}
            src="/images/ic_back.png"
            alt="돌아가기"
          />
        </button>
      </Link>
    </div>
  );
};

export default CommentList;