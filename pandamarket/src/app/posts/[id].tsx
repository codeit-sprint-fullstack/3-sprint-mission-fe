import styles from "@/styles/posts.module.css"
import Comment from '@/components/post/comment';
import CommentList from '@/components/post/postCommentList';
import DropdownMenu from "@/components/Dropdown/DropdownBox";
import FormatDate from "@/utils/Format";
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from 'next/image';
import { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';

type PostComment = {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  // 필요한 필드 추가
};

type Post = {
  id: number;
  title: string;
  createdAt: string;
  content: string;
};

export default function IdPost(){
  const [post, setPost] = useState<Post | null>(null);  // ✅ 단일 객체로 변경
  const [postComment, setPostComment] = useState<PostComment[]>([]);
  const router = useRouter();
  const id = router.query['id'];

  async function loadPost(targetId: string | string[]) {
    const res = await axios.get<Post>(`/articles/${targetId}`); // ✅ Post 타입 지정
    setPost(res.data);
  }

  async function loadPostComment(targetId: string | string[]) {
    try {
      const res = await axios.get<PostComment[]>(`/articles/${targetId}/comment`);
      console.log("Post Comments Response:", res.data);
      setPostComment(res.data); // ✅ 타입이 맞아 오류 없음
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }
  

  useEffect(() => {
    if (id) {
      loadPost(id);
      loadPostComment(id);
    }
  }, [id]);



  const handleDelete = () => {
    setPost(null); // ✅ 게시글 삭제 후 null 처리
  };

  return (
    <div>
      <Header />
      <div className={styles.postWrapper}>
        {post ? (
          <>
            <div className={styles.titleWrapper}>
              <h1 className={styles.postTitle}>{post.title}</h1>
              <DropdownMenu
                postId={post.id}
                onDelete={handleDelete}
                onEdit={() => {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
            <div className={styles.aboutPost}>
              <div>
                <Image
                  src="/images/userImg.png"
                  width={40}
                  height={40}
                  alt="userImage"
                  className={styles.userImage}
                />
                <span className={styles.userName}>총명한판다</span>
                <span className={styles.postDate}>{FormatDate(post.createdAt)}</span>
              </div>
              <div className={styles.heartWrapper}>
                <Image src="/images/ic_heart.png" width={32} height={32} alt="heartImage" />
                <span className={styles.favoriteCount}>999</span>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <span className={styles.postContent}>{post.content}</span>
            </div>
          </>
        ) : (
          <p>게시글을 불러오는 중...</p> // ✅ 데이터 없을 때 로딩 메시지
        )}
      </div>
      <Comment />
      <CommentList comments={postComment} />
      <Footer />
    </div>
  );
}